import {FC, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {IconButton} from "../component/atom/IconButton";
import {BiCheck} from "react-icons/bi";
import {Button} from "../component/atom/Button";

export type LoginPageProps = {}

const LoginPageStyle = styled.div`
`

export const LoginPage: FC<LoginPageProps> = () => {
    const [name, setName] = useState("")
    return (
        <PageLayout>
            <LoginPageStyle>
                <Button
                    onClick={() => {
                        window.location.href = `${import.meta.env.VITE_API_BASE_URL}/api/auth/social/login/initiate?provider_type=KAKAO`;
                    }}>카카오 로그인</Button>
            </LoginPageStyle>
        </PageLayout>
    );
};