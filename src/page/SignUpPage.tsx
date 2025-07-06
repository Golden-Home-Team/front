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

type InitialStepState = { id?: string, email?: string, password?: string, phoneNumber?: string };
type IdStepState = { id?: string, email?: string, password?: string, phoneNumber?: string };
type EmailStepState = { id: string, email?: string, password?: string, phoneNumber?: string };
type PasswordStepState = { id: string, email: string, password?: string, phoneNumber?: string };
type CertfyStepState = { id: string, email: string, password: string, phoneNumber?: string };
type ComplateStepState = { id: string, email: string, password: string, phoneNumber: string };

type Steps = {
    init: InitialStepState;
    id: IdStepState;
    email: EmailStepState;
    password: PasswordStepState;
    certify: CertfyStepState;
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

    const onSubmit = async () => {
        try {
            const req: SignUpReq = {
                email: "ckstmznf@naver.com",
                loginId: "ckstmznf",
                password: "qwer1234",
                phoneNumber: "01050139850"
            }
            const res = signUp(req)
            console.log(res)
        } catch (e) {
            alert("실패..")
        }
    }

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
                onNext={(id) => history.push("email", {id})}
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
                onNext={(password) => history.push("certify", {password})}
                onPrev={() => {}}
                onClose={() => {}}
            />
        )
    }

    return (
        <PageLayout>
            <SignupPageStyle>
                {stepTemplate}
            </SignupPageStyle>
        </PageLayout>
    );
};