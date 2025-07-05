import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../MobileLayout";
import {BaseAppBar} from "../component/atom/BaseAppBar";
import {BiCheck} from "react-icons/bi";


export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    return (
        <PageLayout>
            <MobileLayout
                top={
                    <BaseAppBar
                        left={<BiCheck/>}
                        center={<h1>Title</h1>}
                        right={<h1>Right</h1>}
                    />
                }
                bottom={<h1>World</h1>}
            >
                <MainPageStyle>
                    dasd
                </MainPageStyle>
            </MobileLayout>
        </PageLayout>
    );
};