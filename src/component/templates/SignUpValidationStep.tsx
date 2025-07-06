import {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../MobileLayout";
import {BackCloseAppBar} from "../molecules/BackCloseAppBar";
import {Button} from "../atom/Button";
import {Space} from "../../style/Space";
import {InputLabel} from "../molecules/InputLabel";
import {InputCheckIcon} from "../../InputCheckIcon";
import {getPasswordValidationResult} from "../../utils/validation";
import {LabelWrap} from "../atom/LabelWrap";
import {Input} from "../atom/Input";

export type SignUpValidationStepProps = {
    onPrev: () => void;
    onNext: (phoneNumber: string) => void;
    onClose: () => void;
}

const SignUpValidationStepStyle = styled.div`

`

const Title = styled.h1`
  color: #9B9B9B;
  font-weight: 500;
  font-size: 24px;
`

const HighLight = styled.span`
  color: ${p => p.theme.color.GoldenHome};
  font-weight: 700;
`

const Select = styled.select`
  text-align: center;
  
  outline: none;
  background-color: #fff;
  border: 1px solid #A7A7A7;
  border-radius: ${p => p.theme.size.borderRadius};
`

const Option = styled.option`
  font-size: 13px;
  font-weight: 600;
`

const PhoneInputWrap = styled.div`
  display: grid;
  grid-template-columns: 80px 1fr 1fr auto;
  gap: 8px;
  align-items: stretch;
`


export const SignUpValidationStep: FC<SignUpValidationStepProps> = ({onNext, onPrev, onClose}) => {
    const [phoneNumberFirst, setPhoneNumberFirst] = useState("010");
    const [phoneNumberSecond, setPhoneNumberSecond] = useState("");
    const [phoneNumberThird, setPhoneNumberThird] = useState("");
    const [authCode, setAuthCode] = useState("");

    const onPhoneNumberChange = (e : ChangeEvent) => {
        const value = (e.target as HTMLSelectElement).value;
        setPhoneNumberFirst(value);
    }

    const onSendAuthCode = () => {
        const phoneNumber = `${phoneNumberFirst}${phoneNumberSecond}${phoneNumberThird}`;
        console.log(`인증번호를 ${phoneNumber}로 전송했습니다.`);
    }

    return (
        <MobileLayout
            top={<BackCloseAppBar onPrevClick={onPrev} onXClick={onClose}/>}
            bottom={(
                <Button
                    $isFullWidth
                    onClick={() => onNext("")}
                >다음으로
                </Button>
            )}
            isBottomPadding
        >
            <Title>
                <HighLight>본인인증</HighLight>을 <br/>
                해주세요
            </Title>

            <Space v={40}/>

            <LabelWrap label={"휴대 전화"}>
                <PhoneInputWrap>
                    <Select onChange={onPhoneNumberChange}>
                        <Option value="010" >010</Option>
                        <Option value="011">011</Option>
                        <Option value="016">016</Option>
                        <Option value="017">017</Option>
                        <Option value="018">018</Option>
                        <Option value="019">019</Option>
                    </Select>
                    <Input
                        value={phoneNumberSecond}
                        onChange={setPhoneNumberSecond}
                        maxLength={4}
                    />
                    <Input
                        value={phoneNumberThird}
                        onChange={setPhoneNumberThird}
                        maxLength={4}
                    />
                    <Button onClick={onSendAuthCode}>인증번호</Button>
                </PhoneInputWrap>
            </LabelWrap>

            <Space v={40}/>

            <InputLabel
                label={"인증번호"}
                value={authCode}
                onChange={setAuthCode}
                placeholder={"인증번호 6자리 숫자 입력"}
                maxLength={6}
                rightAddon={(
                    <InputCheckIcon
                        isSuccess={false}
                    />
                )}
                isFullWidth
            />

        </MobileLayout>
    );
};