import {FC, ReactNode} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {Button} from "../component/atom/Button";
import {useAuth} from "../context/AuthContext";
import type {SignUpReq} from "../types/auth";
import type {UseFunnelOptions} from "@use-funnel/react-router-dom";
import {useFunnel} from "@use-funnel/react-router-dom";
import {SignUpInitialStep} from "../component/templates/SignUpInitialStep";
import {SignUpIdStep} from "../component/templates/SignUpIdStep";
import {SignUpEmailStep} from "../component/templates/SignUpEmailStep";
import {SignUpPasswordStep} from "../component/templates/SignUpPasswordStep";
import {SignUpValidationStep} from "../component/templates/SignUpValidationStep";
import {SignUpCompleteStep} from "../component/templates/SignUpCompleteStep";

type InitialStepState = { loginId?: string, email?: string, password?: string, phoneNumber?: string };
type IdStepState = { loginId?: string, email?: string, password?: string, phoneNumber?: string };
type EmailStepState = { loginId: string, email?: string, password?: string, phoneNumber?: string };
type PasswordStepState = { loginId: string, email: string, password?: string, phoneNumber?: string };
type ValidationStepState = { loginId: string, email: string, password: string, phoneNumber?: string };
type ComplateStepState = { loginId: string, email: string, password: string, phoneNumber: string };

type Steps = {
    init: InitialStepState;
    id: IdStepState;
    email: EmailStepState;
    password: PasswordStepState;
    validation: ValidationStepState;
    complete: ComplateStepState
}

export type SignUpPageProps = {}

const SignupPageStyle = styled.div`

`

export const SignUpPage: FC<SignUpPageProps> = () => {
    const {signUp, login, checkUserExists} = useAuth();

    const funnelOptions: UseFunnelOptions<Steps> = {
        id: 'sign-up-app',
        initial: {
            step: 'init',
            context: {} as Steps["init"],
        },
    }

    const {step, history, context} = useFunnel<Steps>(funnelOptions)

    // const onSignUp = async (req : SignUpReq) => {
    //     try {
    //         const res = signUp(req)
    //         history.push("complete", {})
    //     } catch (e) {
    //         alert("실패..")
    //     }
    // }

    const onLogin = async () => {
        try {
            const req = {
                loginId: "ckstmznf",
                password: "qwer1234"
            }
            const res = await login(req)
            console.log(res)
        } catch (e) {
            alert("로그인 실패")
        }

    }

    let stepTemplate: ReactNode

    if (step === 'init') {
        stepTemplate = (
            <SignUpInitialStep
                onNext={() => history.push("id", {})}
                onClose={() => {
                }}
            />
        );
    } else if (step === 'id') {
        stepTemplate = (
            <SignUpIdStep
                onNext={(loginId) => history.push("email", {loginId})}
                onPrev={() => {
                }}
                onClose={() => {
                }}
            />
        );
    } else if (step === 'email') {
        stepTemplate = (
            <SignUpEmailStep
                onNext={(email) => history.push("password", {email})}
                onPrev={() => {
                }}
                onClose={() => {
                }}
            />
        );
    } else if (step === 'password') {
        stepTemplate = (
            <SignUpPasswordStep
                onNext={(password) => history.push("validation", {password})}
                onPrev={() => {
                }}
                onClose={() => {
                }}
            />
        )
    } else if (step === 'validation') {
        stepTemplate = (
            <SignUpValidationStep
                onNext={async (phoneNumber) => {
                    const req : SignUpReq = {
                        ...(context as ValidationStepState),
                        phoneNumber
                    }

                    const res = await signUp(req)
                    history.push("complete", {phoneNumber})
                }}
                onPrev={() => {
                }}
                onClose={() => {
                }}
            />
        )
    } else if (step === 'complete') {
        stepTemplate = (
            <SignUpCompleteStep/>
        );
    }

    return (
        <PageLayout>
            <SignupPageStyle>
                {stepTemplate}
            </SignupPageStyle>
        </PageLayout>
    );
};