import {ChangeEvent, FC, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../../../MobileLayout";
import {BaseAppBar} from "../../../../component/atom/BaseAppBar";
import {BackCloseAppBar} from "../../../../component/molecules/BackCloseAppBar";
import {Button} from "../../../../component/atom/Button";
import {CloseAppBar} from "../../../../component/molecules/CloseAppBar";
import {Space} from "../../../../common/style/Space";
import {InputLabel} from "../../../../component/molecules/InputLabel";
import {InputCheckIcon} from "../../../../component/atom/InputCheckIcon";
import {useAuth} from "../../context/AuthContext";
import {em} from "polished";

export type SignUpEmailStepProps = {
    onPrev: () => void;
    onNext: (email: string) => void;
    onClose: () => void;
}

const SignUpEmailStepStyle = styled.div`

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
  background-color: transparent;
  border: none;
  outline: none;

  &:focus {
    border: none;
  }
`

const Option = styled.option`
  font-size: 13px;
  font-weight: 600;
`

export const SignUpEmailStep: FC<SignUpEmailStepProps> = ({onNext, onPrev, onClose}) => {
    const [email, setEmail] = useState("")
    const [domain, setDomain] = useState<string | null>(null);

    const onEmailInput = (value: string) => {
        setEmail(value);
    }

    const onDomainChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setDomain(value)
    };

    const onNextClick = () => {
        if(domain == "self") {
            onNext(email);
            return
        }

        onNext(`${email}@${domain}`);
    }

    return (
        <MobileLayout
            top={<BackCloseAppBar onPrevClick={onPrev} onXClick={onClose}/>}
            bottom={(
                <Button
                    $isFullWidth
                    onClick={() => onNextClick()}
                >다음으로
                </Button>
            )}
            isBottomPadding
        >
            <Title>
                <HighLight>이메일</HighLight>을 <br/>
                입력해주세요
            </Title>

            <Space v={40}/>

            <InputLabel
                value={email}
                onChange={setEmail}
                label={"이메일"}
                placeholder={"이메일 입력"}
                isFullWidth
                rightAddon={(
                    <Select value={domain} onChange={onDomainChange}>
                        <Option disabled={true} selected>이메일 선택</Option>
                        <Option value={"self"}>직접 입력</Option>
                        <Option value={"naver.com"}>naver.com</Option>
                        <Option value={"kakao.com"}>kakao.com</Option>
                        <Option value={"gmail.com"}>gmail.com</Option>
                    </Select>
                )}
            />

        </MobileLayout>
    );
};