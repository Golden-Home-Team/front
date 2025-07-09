import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../MobileLayout";
import {BackCloseAppBar} from "../component/molecules/BackCloseAppBar";
import {Button} from "../component/atom/Button";
import {Link} from "react-router-dom";
import {RoutePath} from "../RoutePath";


export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    return (
        <PageLayout>
            <MobileLayout>
                <Link to={RoutePath.signUp}>
                    <Button onClick={() => {}}>회원가입</Button>
                </Link>

                <Link to={RoutePath.login}>
                    <Button onClick={() => {}}>로그인</Button>
                </Link>
            </MobileLayout>
        </PageLayout>
    );
};