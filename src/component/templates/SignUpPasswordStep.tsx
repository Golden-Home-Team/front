import {FC, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../MobileLayout";
import {BackCloseAppBar} from "../molecules/BackCloseAppBar";
import {Button} from "../atom/Button";
import {Space} from "../../style/Space";
import {InputLabel} from "../molecules/InputLabel";
import {InputCheckIcon} from "../../InputCheckIcon";
import {getPasswordValidationResult} from "../../utils/validation";

export type SignUpPasswordStepProps = {
    onPrev: () => void;
    onNext: (password: string) => void;
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

export const SignUpPasswordStep: FC<SignUpPasswordStepProps> = ({onNext, onPrev, onClose}) => {
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")

    const {message : passwordValidMessage, isValid : isPasswordValid} = getPasswordValidationResult(password);
    const isPasswordConfirmValid = password == passwordConfirm && password.length > 0;


    return (
        <MobileLayout
            top={<BackCloseAppBar onPrevClick={onPrev} onXClick={onClose}/>}
            bottom={(
                <Button
                    $isFullWidth
                    onClick={() => onNext(password)}
                    isDisabled={!(isPasswordValid && isPasswordConfirmValid)}
                >다음으로
                </Button>
            )}
            isBottomPadding
        >
            <Title>
                <HighLight>비밀번호</HighLight>를 <br/>
                입력해주세요
            </Title>

            <Space v={40}/>

            <InputLabel
                value={password}
                onChange={setPassword}
                placeholder={"비밀번호 입력"}
                label={"비밀번호"}
                type={"password"}
                bottomMessage={passwordValidMessage}
                isFullWidth
                isShowBottomMessageSpace
                rightAddon={(
                    <InputCheckIcon
                        isSuccess={isPasswordValid}
                    />
                )}
            />

            <Space v={26} />

            <InputLabel
                value={passwordConfirm}
                onChange={setPasswordConfirm}
                placeholder={"비밀번호 입력"}
                label={"비밀번호 확인"}
                type={"password"}
                bottomMessage={"비밀번호를 한번 더 입력해주세요."}
                isFullWidth
                isShowBottomMessageSpace
                rightAddon={(
                    <InputCheckIcon
                        isSuccess={isPasswordConfirmValid}
                    />
                )}
            />
        </MobileLayout>
    );
};