import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../MobileLayout";
import {BackCloseAppBar} from "../component/molecules/BackCloseAppBar";


export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    return (
        <PageLayout>
            <MobileLayout
                top={
                    <BackCloseAppBar
                        onPrevClick={() => {
                        }}
                        onXClick={() => {
                        }}
                    />}
                bottom={<h1>World</h1>}
            >
                <MainPageStyle>
                </MainPageStyle>
            </MobileLayout>
        </PageLayout>
    );
};