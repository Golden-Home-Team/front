import {FC} from "react";
import styled from "styled-components";
import {SelectListItem} from "../../../../component/atom/SelectListItem";

export type GradeSelectSheetProps = {
    onSelect: (v: string) => void;
}
const GradeSelectSheetStyle = styled.ul`
`
export const GradeSelectSheet: FC<GradeSelectSheetProps> = ({onSelect}) => {
    return (
        <GradeSelectSheetStyle>
            <SelectListItem label={"A등급"} onClick={() => onSelect("A")}/>
            <SelectListItem label={"B등급"} onClick={() => onSelect("B")}/>
            <SelectListItem label={"C등급"} onClick={() => onSelect("C")}/>
            <SelectListItem label={"D등급"} onClick={() => onSelect("D")}/>
            <SelectListItem label={"E등급"} onClick={() => onSelect("E")}/>
        </GradeSelectSheetStyle>
    );
};