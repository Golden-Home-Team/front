import {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../../../MobileLayout";
import {BackCloseAppBar} from "../../../../component/molecules/BackCloseAppBar";
import {Button} from "../../../../component/atom/Button";
import {Space} from "../../../../style/Space";
import {InputLabel} from "../../../../component/molecules/InputLabel";
import {InputCheckIcon} from "../../../../component/atom/InputCheckIcon";
import {LabelWrap} from "../../../../component/atom/LabelWrap";
import {Input} from "../../../../component/atom/Input";

export type SignUpValidationStepProps = {
    onPrev: () => void;
    onNext: (phoneNumber: string) => void;
    onClose: () => void;
}

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
    const [phone1, setPhone1] = useState("010");
    const [phone2, setPhone2] = useState("");
    const [phone3, setPhone3] = useState("");
    const [authCode, setAuthCode] = useState("");

    const phoneNumber = `${phone1}${phone2}${phone3}`;

    const onPhoneNumberChange = (e : ChangeEvent) => {
        const value = (e.target as HTMLSelectElement).value;
        setPhone1(value);
    }

    const onSendAuthCode = () => {
        console.log(`인증번호를 ${phoneNumber}로 전송했습니다.`);
    }

    return (
        <MobileLayout
            top={<BackCloseAppBar onPrevClick={onPrev} onXClick={onClose}/>}
            bottom={(
                <Button
                    $isFullWidth
                    onClick={() => onNext(phoneNumber)}
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
                        value={phone2}
                        onChange={setPhone2}
                        maxLength={4}
                    />
                    <Input
                        value={phone3}
                        onChange={setPhone3}
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