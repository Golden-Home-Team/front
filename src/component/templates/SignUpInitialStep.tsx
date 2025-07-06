import {FC} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../MobileLayout";
import {BaseAppBar} from "../atom/BaseAppBar";
import {BackCloseAppBar} from "../molecules/BackCloseAppBar";
import {Button} from "../atom/Button";
import {CloseAppBar} from "../molecules/CloseAppBar";
import {Space} from "../../style/Space";

export type SignUpInitialStepProps = {
    onNext: () => void;
    onClose: () => void;
}

const SignUpInitialStepStyle = styled.div`

`

const Title = styled.h1`
  font-weight: 700;
  font-size: 24px;
`

const Message = styled.p`
  color: #666666;
  font-weight: 500;
  font-size: 14px;
`

export const SignUpInitialStep: FC<SignUpInitialStepProps> = ({onNext, onClose}) => {
    return (
        <MobileLayout
            top={<CloseAppBar onXClick={onClose}/>}
            bottom={<Button onClick={onNext} $isFullWidth>다음으로</Button>}
            isBottomPadding
        >
            <Title>
                서비스 이용을 위한 <br/>
                동의 안내
            </Title>

            <Space v={9}/>

            <Message>
                서비스 이용에 꼭 필요한 사항입니다. <br/>
                정책 및 약관을 클릭해 모든 내용을 확인해주세요.
            </Message>

        </MobileLayout>
    );
};