import 요양원 from "./요양원.png";
import 요양병원 from "./요양병원.png";
import 양로원 from "./양로원.png";
import 실버타운 from "./실버타운.png";
import 단기보호 from "./단기보호.png";
import 주야간보호 from "./주야간보호.png";
import 방문요양 from "./방문요양.png";
import 방문간호 from "./방문간호.png";
import 방문목욕 from "./방문목욕.png";
import 맞춤추천 from "./맞춤추천.png";
import 요양정보 from "./요양정보.png";
import 지도검색 from "./지도검색.png";
import {FacilityType} from "../../domains/facility/types/facility";
import {MenuItemType} from "../page/MainPage";

//todo: 나중에 코드 정리
//todo: 지금은 새벽 6시... 형진님이랑 테일러샵 작업중.....

export type IconKey = FacilityType | MenuItemType;

export const menuIcons : Record<MenuItemType, string> = {
    맞춤추천,
    요양정보,
    지도검색,
}

export const facilityIcons: Record<FacilityType, string> = {
    요양원,
    요양병원,
    양로원,
    실버타운,
    단기보호,
    주야간보호,
    방문요양,
    방문간호,
    방문목욕,
};

export const allIcons: Record<IconKey, string> = {
    ...facilityIcons,
    ...menuIcons,
};