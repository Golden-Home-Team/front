import {FC} from "react";
import styled from "styled-components";
import {MobileLayout} from "../../MobileLayout";
import {BaseAppBar} from "../atom/BaseAppBar";
import {BackCloseAppBar} from "../molecules/BackCloseAppBar";
import {Button} from "../atom/Button";
import {CloseAppBar} from "../molecules/CloseAppBar";

export type SignUpInitialStepProps = {
    onNext: () => void;
    onPrev: () => void;
    onClose: () => void;
}

const SignUpInitialStepStyle = styled.div`

`
export const SignUpInitialStep: FC<SignUpInitialStepProps> = ({onNext, onClose, onPrev}) => {
    return (
        <MobileLayout
            top={(
                <CloseAppBar
                    onXClick={() => onClose()}
                />
            )}
            bottom={(
                <Button
                    onClick={() => onNext()}
                    $isFullWidth
                >다음으로</Button>
            )}
            isBottomPadding
        >
            1212
        </MobileLayout>
    );
};