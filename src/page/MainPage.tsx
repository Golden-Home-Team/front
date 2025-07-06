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
            <MobileLayout
                top={<div>헤더</div>}
                bottom={<div>Bottom</div>}
            >
                <Link to={RoutePath.signUp}>
                    <Button onClick={() => {}}>회원가입</Button>
                </Link>
            </MobileLayout>
        </PageLayout>
    );
};