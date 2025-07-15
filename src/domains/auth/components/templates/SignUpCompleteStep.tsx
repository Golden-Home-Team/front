import {FC} from "react";
import {PageLayout} from "../../../../style/PageLayout";
import styled from "styled-components";
import Party from "../../../../assets/party.png"
import {Space} from "../../../../style/Space";
import {Button} from "../../../../component/atom/Button";
import {BsChevronRight} from "react-icons/bs";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../../../RoutePath";

export type SignUpComplateStepProps = {}

const SignUpCompleteStepStyle = styled.div`
  height: 100%;

  margin-top: 156px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const Title = styled.h1`
  color: ${p => p.theme.color.GoldenHome};

  font-size: 24px;
  font-weight: 700;
  text-align: center;
`


export const SignUpCompleteStep: FC<SignUpComplateStepProps> = ({}) => {
    const navigate = useNavigate()

    const onGoHomeClick = () => {
        navigate(RoutePath.main, {replace: true})
    }
    return (
        <PageLayout>
            <SignUpCompleteStepStyle>
                <img width={53} src={Party}/>
                <Space v={12}/>
                <Title>
                    회원가입이 <br/>
                    완료되었습니다.
                </Title>
                <Space v={52}/>
                <Button
                    onClick={onGoHomeClick}
                    borderRadius={"20px"}
                >
                    홈으로 가기
                    <Space h={8}/>
                    <BsChevronRight/>
                    {/*  todo: icon 변경  */}
                </Button>
            </SignUpCompleteStepStyle>
        </PageLayout>
    );
};