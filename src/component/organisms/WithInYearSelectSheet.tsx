import {FC} from "react";
import styled from "styled-components";
import {SelectListItem} from "../atom/SelectListItem";

export type WithInYearSelectSheetProps = {
    onSelect: (v: string) => void;
}
const WithInYearSelectSheetStyle = styled.ul`
`
export const WithInYearSelectSheet: FC<WithInYearSelectSheetProps> = ({onSelect}) => {
    return (
        <WithInYearSelectSheetStyle>
            <SelectListItem label={"1년 이내"} onClick={() => onSelect("1")}/>
            <SelectListItem label={"3년 이내"} onClick={() => onSelect("3")}/>
            <SelectListItem label={"5년 이내"} onClick={() => onSelect("5")}/>
            <SelectListItem label={"10년 이내"} onClick={() => onSelect("10")}/>
        </WithInYearSelectSheetStyle>
    );
};