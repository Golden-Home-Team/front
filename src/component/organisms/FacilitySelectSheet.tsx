import {FacilityType} from "../../types/facility";
import {FC} from "react";
import styled from "styled-components";
import 요양원 from "./../../assets/요양원.png"
import 양로원 from "./../../assets/양로원.png"
import 단기보호 from "./../../assets/단기보호.png"
import {facilityIcons} from "../../assets/facilityIcon";

export type FacilitySelectSheetProps = {
    onSelect: (v: FacilityType) => void;
}
const FacilitySelectSheetStyle = styled.ul`
`

const ListItem = styled.li`
  margin-top: 23px;

  display: flex;
  align-items: center;
  gap: 12px;
`

const TypeIcon = styled.img`
  width: 23px;
  height: 23px;
`

const Name = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
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
                <ListItem key={name} onClick={() => onSelect(name)}>
                    <TypeIcon src={facilityIcons[name]}/>
                    <Name>{name}</Name>
                </ListItem>
            ))}
        </FacilitySelectSheetStyle>
    );
};