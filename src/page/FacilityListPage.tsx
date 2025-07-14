import {FC, useState} from "react";
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
import {SortSelectSheet} from "../component/organisms/SortSelectSheet";
import {GradeSelectSheet} from "../component/organisms/GradeSelectSheet";
import {WithInYearSelectSheet} from "../component/organisms/WithInYearSelectSheet";

import styled from "styled-components";
import {Input} from "../component/atom/Input";
import {Button} from "../component/atom/Button";

export type PriceSelectSheetProps = {
    initialMinPrice?: number;
    initialMaxPrice?: number;
    onSelect: (minPrice: number, maxPrice: number) => void;
}

const PriceSelectSheetStyle = styled.div`

`

export const PriceSelectSheet: FC<PriceSelectSheetProps> = ({initialMinPrice, initialMaxPrice, onSelect}) => {
    const [minValue, setMinValue] = useState(initialMinPrice ?? 0)
    const [maxValue, setMaxValue] = useState(initialMaxPrice ?? 5_720_000)

    return (
        <PriceSelectSheetStyle>
            <Input value={minValue.toString()} onChange={v => setMinValue(Number(v))} type={"number"}/>
            <Input value={maxValue.toString()} onChange={v => setMaxValue(Number(v))} type={"number"}/>
            <Button onClick={() => onSelect(minValue, maxValue)}>적용</Button>
        </PriceSelectSheetStyle>
    );
};


export type FacilityListPageProps = {}


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
        (onClose) => {
            const onSelect = (v: FacilityType) => {
                updateSearchParam({facilityType: v})
                onClose()
            }
            return <FacilitySelectSheet onSelect={onSelect}/>
        }
    )

    const onOpenSortSheet = useBottomSheetSelector(
        "정렬",
        (onClose) => {
            const onSelect = (v: string) => {
                onClose()
            }
            return <SortSelectSheet onSelect={onSelect}/>
        }
    )

    const onOpenGradeSheet = useBottomSheetSelector(
        "시설 등급",
        (onClose) => {
            const onSelect = (v: string) => {
                updateSearchParam({grade: v})
                onClose()
            }
            return <GradeSelectSheet onSelect={onSelect}/>
        }
    )

    const onOpenWithInYearSheet = useBottomSheetSelector(
        "설립 연도",
        (onClose) => {
            const onSelect = (v: string) => {
                updateSearchParam({withinYears: v})
                onClose()
            }
            return <WithInYearSelectSheet onSelect={onSelect}/>
        }
    )

    const onOpenPriceSheet = useBottomSheetSelector(
        "비용",
        (onClose) => {
            const onSelect = (minPrice: number, maxPrice: number) => {
                updateSearchParam({minPrice, maxPrice})
                onClose()
            }
            const {minPrice, maxPrice} = searchReq;
            return <PriceSelectSheet
                onSelect={onSelect}
                initialMinPrice={minPrice as number}
                initialMaxPrice={maxPrice as number}
            />
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
                <SearchChip
                    label={"정렬"}
                    value={undefined}
                    onClick={onOpenSortSheet}
                />
                <SearchChip
                    label={"시설 등급"}
                    value={searchReq.grade}
                    onClick={onOpenGradeSheet}
                />
                <SearchChip
                    label={"설립 연도"}
                    value={searchReq.withinYears ? `${searchReq.withinYears}년 이내` : undefined}
                    onClick={onOpenWithInYearSheet}
                />


                <SearchChip
                    label={"비용"}
                    value={searchReq.minPrice?.toString()}
                    onClick={onOpenPriceSheet}
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