import {FacilityType} from "../../domains/facility/types/facility";
import {FC} from "react";
import {allIcons} from "../../common/assets/facilityIcon";
import {MenuItemType} from "../../common/page/MainPage";
import styled from "styled-components";
import {Space} from "../../common/style/Space";

export type HomeMenuItemProps = {
    type: FacilityType | MenuItemType;
    onClick: () => void;
}
const HomeMenuItemStyle = styled.li`
  padding: 12px;
  
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  
  cursor: pointer;
`
const Icon = styled.img`
  width: 33px;
  height: 33px;
`
const Name = styled.div`
  font-weight: 500;
  font-size: 12px;
  line-height: 22px;
  text-align: center;
  white-space: nowrap;
`
export const HomeMenuItem: FC<HomeMenuItemProps> = ({type, onClick}) => {
    return (
        <HomeMenuItemStyle onClick={onClick}>
            <Icon src={allIcons[type]} alt=""/>
            <Space v={5}/>
            <Name>{type}</Name>
        </HomeMenuItemStyle>
    );
};