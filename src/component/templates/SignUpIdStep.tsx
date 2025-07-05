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

export type SignUpIdStepProps = {
    onPrev: () => void;
    onNext: (id: string) => void;
    onClose: () => void;
}

const SignUpIdStepStyle = styled.div`

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

export const SignUpIdStep: FC<SignUpIdStepProps> = ({onNext, onClose}) => {
    const {checkUserExists} = useAuth();
    const [id, setId] = useState("")
    const [isIdValid, setIsIdValid] = useState(false);

    const onInputId = async (value: string) => {
        //todo input debounce 적용할것
        //todo id에 추가 제약조건 적용할것

        setId(value);
        try {
            const checkRed = await checkUserExists(value);
            setIsIdValid(checkRed);
        } catch (e) {
            setIsIdValid(false);
        }
    }

    return (
        <MobileLayout
            top={<CloseAppBar onXClick={onClose}/>}
            bottom={(
                <Button
                    onClick={() => onNext("")}
                    isDisabled={!isIdValid}
                    $isFullWidth>다음으로
                </Button>
            )}
            isBottomPadding
        >
            <Title>
                아이디를 <br/>
                입력해주세요
            </Title>

            <Space v={40}/>

            <InputLabel
                value={id}
                onChange={onInputId}
                label={"아이디"}
                placeholder={"아이디 입력"}
                isFullWidth
                rightAddon={
                    <InputCheckIcon isSuccess={isIdValid}/>
                }
                bottomMessage={isIdValid ? "사용 가능한 아이디입니다." : "사용 불가능한 아이디 입니다."}
                isShowBottomMessageSpace
            />

        </MobileLayout>
    );
};