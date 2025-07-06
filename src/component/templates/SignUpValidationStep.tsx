import {FC, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../MobileLayout";
import {BackCloseAppBar} from "../molecules/BackCloseAppBar";
import {Button} from "../atom/Button";
import {Space} from "../../style/Space";
import {InputLabel} from "../molecules/InputLabel";
import {InputCheckIcon} from "../../InputCheckIcon";
import {getPasswordValidationResult} from "../../utils/validation";

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


export const SignUpValidationStep: FC<SignUpValidationStepProps> = ({onNext, onPrev, onClose}) => {
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
                <HighLight>본인인증</HighLight>을 <br/>
                해주세요
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