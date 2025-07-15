import {FacilityType} from "../../types/facility";
import {FC} from "react";
import styled from "styled-components";
import {facilityIcons} from "../../../../common/assets/facilityIcon";
import {SelectListItem} from "../../../../component/atom/SelectListItem";

export type FacilitySelectSheetProps = {
    onSelect: (v: FacilityType) => void;
}
const FacilitySelectSheetStyle = styled.ul`
`


export const FacilitySelectSheet: FC<FacilitySelectSheetProps> = ({onSelect}) => {
    const facilities: FacilityType[] = [
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
        <FacilitySelectSheetStyle>
            {facilities.map(name => (
                <SelectListItem
                    icon={facilityIcons[name]}
                    label={name}
                    onClick={() => onSelect(name)}
                />
            ))}
        </FacilitySelectSheetStyle>
    );
};