import {FC, useEffect, useRef, useState} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../MobileLayout";
import {BaseAppBar} from "../atom/BaseAppBar";
import {BackCloseAppBar} from "../molecules/BackCloseAppBar";
import {Button} from "../atom/Button";
import {CloseAppBar} from "../molecules/CloseAppBar";
import {Space} from "../../style/Space";
import {InputLabel} from "../molecules/InputLabel";
import {InputCheckIcon} from "../atom/InputCheckIcon";
import {useAuth} from "../../context/AuthContext";

export type SignUpIdStepProps = {
    onPrev: () => void;
    onNext: (id: string) => void;
    onClose: () => void;
}

const SignUpIdStepStyle = styled.div`

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

export const SignUpIdStep: FC<SignUpIdStepProps> = ({onNext, onPrev, onClose}) => {
    const {checkUserExists} = useAuth();
    const [id, setId] = useState("")
    const [isIdValid, setIsIdValid] = useState(false);
    const idValidDebouncing = useRef<ReturnType<typeof setTimeout> | null>(null)

    const onInputId = (value: string) => {
        //todo input debounce 적용할것
        //todo id에 추가 제약조건 적용할것
        setId(value);

        if(idValidDebouncing.current) {
            clearTimeout(idValidDebouncing.current!!)
        }

        idValidDebouncing.current = setTimeout(async () => {
            if(value.length == 0){
                setIsIdValid(false);
                return
            }
            try {
                const checkRed = await checkUserExists(value);
                setIsIdValid(checkRed);
            } catch (e) {
                setIsIdValid(false);
            }
        }, 200)
    }

    useEffect(() => {
        return () => {
            if(idValidDebouncing.current != null)
                clearTimeout(idValidDebouncing.current!!)
        }
    }, [])

    return (
        <MobileLayout
            top={<BackCloseAppBar onPrevClick={onPrev} onXClick={onClose}/>}
            bottom={(
                <Button
                    onClick={() => onNext(id)}
                    isDisabled={!isIdValid}
                    $isFullWidth>다음으로
                </Button>
            )}
            isBottomPadding
        >
            <Title>
                <HighLight>아이디</HighLight>를 <br/>
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