import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../../MobileLayout";
import {useFacility} from "../../domains/facility/context/FacilityContext";
import {HomeAppBar} from "../../component/molecules/HomeAppBar";
import {HomeMenuList} from "../../component/organisms/HomeMenuList";

export type MenuItemType = "맞춤추천" | "요양정보" | "지도검색";

export type MainPageProps = {}

const MainPageStyle = styled.div`
`



export const MainPage: FC<MainPageProps> = () => {
    const {getFacility} = useFacility();

    return (
        <PageLayout>
            <MobileLayout
                top={(
                    <HomeAppBar/>
                )}
            >
                <HomeMenuList/>
            </MobileLayout>
        </PageLayout>
    );
};