import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../../MobileLayout";
import {useFacility} from "../../domains/facility/context/FacilityContext";
import {HomeAppBar} from "../../component/molecules/HomeAppBar";
import {FacilityType} from "../../domains/facility/types/facility";
import {HomeMenuItem} from "../../HomeMenuItem";

export type MenuItemType = "맞춤추천" | "요양정보" | "지도검색";

export type MainPageProps = {}

const MainPageStyle = styled.div`
`

const HomeMenuList = styled.ul`
    display: grid;
  grid-template-columns: repeat(4, 1fr);
`


export const MainPage: FC<MainPageProps> = () => {
    const {getFacility} = useFacility();

    const facilities: (FacilityType | MenuItemType)[] = [
        "맞춤추천",
        "요양정보",
        "지도검색",
        "요양원",
        "요양병원",
        "양로원",
        "실버타운",
        "단기보호",
        "주야간보호",
        "방문요양",
        "방문간호",
        "방문목욕",
    ];

    return (
        <PageLayout>
            <MobileLayout
                top={(
                    <HomeAppBar/>
                )}
            >
                <HomeMenuList>
                    {facilities.map(type => (
                        <HomeMenuItem type={type}/>
                    ))}
                </HomeMenuList>
            </MobileLayout>
        </PageLayout>
    );
};