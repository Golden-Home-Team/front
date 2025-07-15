import 요양원 from "./요양원.png";
import 요양병원 from "./요양병원.png";
import 양로원 from "./양로원.png";
import 실버타운 from "./실버타운.png";
import 단기보호 from "./단기보호.png";
import 주야간보호 from "./주야간보호.png";
import 방문요양 from "./방문요양.png";
import 방문간호 from "./방문간호.png";
import 방문목욕 from "./방문목욕.png";
import {FacilityType} from "../domains/facility/types/facility";

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
