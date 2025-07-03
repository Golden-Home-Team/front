import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../MobileLayout";


export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    return (
        <PageLayout>
            <MobileLayout
                top={<h1>Hello</h1>}
                bottom={<h1>World</h1>}
            >
                <MainPageStyle>
                    dasd
                </MainPageStyle>
            </MobileLayout>
        </PageLayout>
    );
};