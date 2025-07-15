import {FC, ReactNode} from "react";
import styled from "styled-components";
import {PageLayout} from "../../../style/PageLayout";
import {Button} from "../../../component/atom/Button";
import {useAuth} from "../../../context/AuthContext";
import type {SignUpReq} from "../../../types/auth";
import type {UseFunnelOptions} from "@use-funnel/react-router-dom";
import {useFunnel} from "@use-funnel/react-router-dom";
import {SignUpInitialStep} from "../components/templates/SignUpInitialStep";
import {SignUpIdStep} from "../components/templates/SignUpIdStep";
import {SignUpEmailStep} from "../components/templates/SignUpEmailStep";
import {SignUpPasswordStep} from "../components/templates/SignUpPasswordStep";
import {SignUpValidationStep} from "../components/templates/SignUpValidationStep";
import {SignUpCompleteStep} from "../components/templates/SignUpCompleteStep";
import {useNavigate} from "react-router-dom";

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
    const navigation = useNavigate()
    const {signUp} = useAuth();

    const funnelOptions: UseFunnelOptions<Steps> = {
        id: 'sign-up-app',
        initial: {
            step: 'init',
            context: {} as Steps["init"],
        },
    }

    const {step, history, context} = useFunnel<Steps>(funnelOptions)

    let stepTemplate: ReactNode

    if (step === 'init') {
        stepTemplate = (
            <SignUpInitialStep
                onNext={() => history.push("id", {})}
                onClose={() => navigation(-1, {replace: true})}
            />
        );
    } else if (step === 'id') {
        stepTemplate = (
            <SignUpIdStep
                onNext={(loginId) => history.push("email", {loginId})}
                onPrev={() => history.back()}
                onClose={() => navigation(-1, {replace: true})}
            />
        );
    } else if (step === 'email') {
        stepTemplate = (
            <SignUpEmailStep
                onNext={(email) => history.push("password", {email})}
                onPrev={() => history.back()}
                onClose={() => navigation(-1, {replace: true})}
            />
        );
    } else if (step === 'password') {
        stepTemplate = (
            <SignUpPasswordStep
                onNext={(password) => history.push("validation", {password})}
                onPrev={() => history.back()}
                onClose={() => navigation(-1, {replace: true})}
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
                onPrev={() => history.back()}
                onClose={() => navigation(-1, {replace: true})}
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