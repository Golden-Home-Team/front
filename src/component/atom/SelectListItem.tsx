import {FC} from "react";
import styled from "styled-components";

export type SelectListItemProps = {
    icon?: string;
    label: string;
    onClick: () => void;
}

const SelectListItemStyle = styled.li`
  padding: 14px 0;
  
  display: flex;
  align-items: center;
  gap: 12px;
`
const Icon = styled.img`
  width: 23px;
  height: 23px;
`
const Name = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 22px;
`
export const SelectListItem: FC<SelectListItemProps> = ({icon, label, onClick}) => {
    return (
        <SelectListItemStyle onClick={() => onClick()}>
            {icon && <Icon src={icon}/>}
            <Name>{label}</Name>
        </SelectListItemStyle>
    );
};