import {FC} from "react";
import styled from "styled-components";

export type SortSelectSheetProps = {
    onSelect: (v: string) => void;
}
const SortSelectSheetStyle = styled.ul`

`
export const SortSelectSheet: FC<SortSelectSheetProps> = ({onSelect}) => {
    return (
        <SortSelectSheetStyle>

        </SortSelectSheetStyle>
    );
};