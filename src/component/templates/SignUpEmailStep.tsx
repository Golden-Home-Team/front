import {FC, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../MobileLayout";
import {BaseAppBar} from "../atom/BaseAppBar";
import {BackCloseAppBar} from "../molecules/BackCloseAppBar";
import {Button} from "../atom/Button";
import {CloseAppBar} from "../molecules/CloseAppBar";
import {Space} from "../../style/Space";
import {InputLabel} from "../molecules/InputLabel";
import {InputCheckIcon} from "../../InputCheckIcon";
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

export const SignUpEmailStep: FC<SignUpEmailStepProps> = ({onNext, onClose}) => {
    const [email, setEmail] = useState("")

    return (
        <MobileLayout
            top={<CloseAppBar onXClick={onClose}/>}
            bottom={(
                <Button
                    $isFullWidth
                    onClick={() => onNext(email)}
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
            />

        </MobileLayout>
    );
};