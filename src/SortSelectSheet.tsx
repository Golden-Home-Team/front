import {FC} from "react";
import styled from "styled-components";
import {SelectListItem} from "./component/atom/SelectListItem";
import 양로원 from "./assets/양로원.png"

export type SortSelectSheetProps = {
    onSelect: (v: string) => void;
}
const SortSelectSheetStyle = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const SortSelectSheet: FC<SortSelectSheetProps> = ({onSelect}) => {
    return (
        <SortSelectSheetStyle>
            <SelectListItem icon={양로원} label={"관련도순"} onClick={() => onSelect("")}/>
            <SelectListItem icon={양로원} label={"조회순"} onClick={() => onSelect("")}/>
            <SelectListItem icon={양로원} label={"후기 많은순"} onClick={() => onSelect("")}/>
            <SelectListItem icon={양로원} label={"찜 많은순"} onClick={() => onSelect("")}/>
            <SelectListItem icon={양로원} label={"상담 많은순"} onClick={() => onSelect("")}/>
        </SortSelectSheetStyle>
    );
};