import {FC} from "react";
import {FacilityType} from "../../domains/facility/types/facility";
import {HomeMenuItem} from "../../HomeMenuItem";
import {MenuItemType} from "../../common/page/MainPage";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {RoutePath} from "../../RoutePath";

export type HomeMenuListProps = {}
const HomeMenuListStyle = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`
export const HomeMenuList: FC<HomeMenuListProps> = () => {
    const facilities: (FacilityType | MenuItemType)[] = [
        "맞춤추천",
        "요양정보",
        "지도검색",
        "요양원",
        "요양병원",
        "실버타운",
        "양로원",
        "주야간보호",
        "단기보호",
        "방문요양",
        "방문간호",
        "방문목욕",
    ];
    const navigate = useNavigate();

    return (
        <HomeMenuListStyle>
            {facilities.map(type => (
                <HomeMenuItem
                    type={type}
                    onClick={() => navigate(`${RoutePath.facilityList}?facilityType=${type}`)}
                />
            ))}
        </HomeMenuListStyle>
    );
};