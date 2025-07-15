import {FC} from "react";
import styled from "styled-components";
import {SelectListItem} from "../../../../component/atom/SelectListItem";
import 조회순 from "../../../../common/assets/조회순.svg"
import 관련도순 from "../../../../common/assets/관련도순.svg"
import 후기많은순 from "../../../../common/assets/후기 많은순.svg"
import 찜많은순 from "../../../../common/assets/찜 많은순.svg"
import 상담많은순 from "../../../../common/assets/상담 많은순.svg"

export type SortSelectSheetProps = {
    onSelect: (v: string) => void;
}
const SortSelectSheetStyle = styled.ul`
`
export const SortSelectSheet: FC<SortSelectSheetProps> = ({onSelect}) => {
    return (
        <SortSelectSheetStyle>
            {/*todo: 서버에 정렬 물어보기 -> 선택 함수 수정*/}
            <SelectListItem icon={관련도순} label={"관련도순"} onClick={() => onSelect("")}/>
            <SelectListItem icon={조회순} label={"조회순"} onClick={() => onSelect("")}/>
            <SelectListItem icon={후기많은순} label={"후기 많은순"} onClick={() => onSelect("")}/>
            <SelectListItem icon={찜많은순} label={"찜 많은순"} onClick={() => onSelect("")}/>
            <SelectListItem icon={상담많은순} label={"상담 많은순"} onClick={() => onSelect("")}/>
        </SortSelectSheetStyle>
    );
};