import {FC, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {Button} from "../component/atom/Button";
import {useAuth} from "../context/AuthContext";

export type SignUpPageProps = {}

const SignupPageStyle = styled.div`
`

export const SignUpPage: FC<SignUpPageProps> = () => {
    const {signUp} = useAuth();

    const onSubmit = async () => {
        try {
            const req = {
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

    return (
        <PageLayout>
            <SignupPageStyle>
                <Button onClick={() => onSubmit()}>로그인</Button>
            </SignupPageStyle>
        </PageLayout>
    );
};