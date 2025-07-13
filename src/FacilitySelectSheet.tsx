import {FacilityType} from "./types/facility";
import {FC} from "react";
import styled from "styled-components";

export type FacilitySelectSheetProps = {
    onSelect: (v: FacilityType) => void;
}
const FacilitySelectSheetStyle = styled.ul`

`
export const FacilitySelectSheet: FC<FacilitySelectSheetProps> = ({onSelect}) => {
    return (
        <FacilitySelectSheetStyle>
            <li onClick={() => {
                onSelect("요양원")
            }}>요양원
            </li>
            <li onClick={() => {
                onSelect("양로원")
            }}>양로원
            </li>
            <li onClick={() => {
                onSelect("방문간호")
            }}>방문 간호
            </li>
        </FacilitySelectSheetStyle>
    );
};