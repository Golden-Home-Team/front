import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../MobileLayout";
import {useFacility} from "../context/FacilityContext";
import {useQuery} from "@tanstack/react-query";
import {FacilityListItem} from "../component/atom/FacilityListItem";
import {useFacilitySearch} from "../hooks/useFacilitySearch";
import {FacilityType} from "../types/facility";
import {useBottomSheetSelector} from "../hooks/useBottomSheetSelector";
import {FacilitySelectSheet} from "../component/organisms/FacilitySelectSheet";
import {SearchChip} from "../component/atom/SearchChip";


export type FacilityListPageProps = {}

const FacilityListPageStyle = styled.div`
`


export const FacilityListPage: FC<FacilityListPageProps> = () => {
    const {searchFacility} = useFacility();
    const {searchReq, updateSearchParam} = useFacilitySearch()
    const {isLoading, data, error} = useQuery({
        queryKey: ["facilities", searchReq],
        queryFn: async () => await searchFacility(searchReq),
        staleTime: 1000 * 5,
    })

    //todo: hook을 사용하는 쪽에서 너무 불편한데 이게 최선일까..?
    const onOpenTypeSheet = useBottomSheetSelector(
        "시설 유형",
        "시설 유형",
        (onClose) => {
            const onSelect = (v: FacilityType) => {
                updateSearchParam("facilityType", v)
                onClose()
            }
            return <FacilitySelectSheet onSelect={onSelect}/>
        }
    )

    return (
        <PageLayout>
            <MobileLayout>
                <SearchChip
                    label={"시설 유형"}
                    value={searchReq.facilityType}
                    onClick={onOpenTypeSheet}
                />
                {isLoading && "로딩중"}
                {error && "에러"}
                {data && (
                    data.map(d => (
                        <FacilityListItem key={d.id} facility={d}/>
                    ))
                )}
            </MobileLayout>
        </PageLayout>
    );
};