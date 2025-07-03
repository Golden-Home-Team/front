import {FC, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {Button} from "../component/atom/Button";
import {useAuth} from "../context/AuthContext";
import type {SignUpReq} from "../types/auth";
import {Input} from "../component/atom/Input";
import {LabelWrap} from "../component/atom/LabelWrapProps";
import {GoCheck} from "react-icons/go";

export type SignUpPageProps = {}

const SignupPageStyle = styled.div`
`

export const SignUpPage: FC<SignUpPageProps> = () => {
    const {signUp, login, checkUserExists} = useAuth();

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

    return (
        <PageLayout>
            <SignupPageStyle>
                <Button onClick={() => onSubmit()}>회원가입</Button>
                <Button onClick={() => onLogin()}>로그인</Button>
                <Button onClick={() => {
                    checkUserExists("ckstmznf11").then(res => {
                        console.log(res)
                    })
                }}>클릭</Button>

                <LabelWrap label={"아이디"}>
                    <Input
                        value={""}
                        onChange={() => {
                        }}
                        placeholder={"입력"}
                        rightAddon={(
                            <GoCheck />
                        )}
                    />
                </LabelWrap>
            </SignupPageStyle>
        </PageLayout>
    );
};