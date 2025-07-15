import {FC} from "react";
import {PageLayout} from "../../../common/style/PageLayout";
import {MobileLayout} from "../../../MobileLayout";
import {useFacility} from "../context/FacilityContext";
import {useQuery} from "@tanstack/react-query";
import {FacilityListItem} from "../components/atoms/FacilityListItem";
import {useFacilitySearch} from "../hooks/useFacilitySearch";
import {FacilityType} from "../types/facility";
import {useBottomSheetSelector} from "../hooks/useBottomSheetSelector";
import {FacilitySelectSheet} from "../components/organisms/FacilitySelectSheet";
import {SearchChip} from "../../../component/atom/SearchChip";
import {SortSelectSheet} from "../components/organisms/SortSelectSheet";
import {GradeSelectSheet} from "../components/organisms/GradeSelectSheet";
import {WithInYearSelectSheet} from "../components/organisms/WithInYearSelectSheet";
import {PriceSelectSheet} from "../components/organisms/PriceSelectSheet";
import styled from "styled-components";
import {LocationSelectSheet} from "../components/organisms/LocationSelectSheet";
import {SearchAppBar} from "../../../component/molecules/SearchAppBar";
import {useNavigate} from "react-router-dom";


export type FacilityListPageProps = {}

const SearchChipWrap = styled.div`
  width: 100%;

  padding: 8px 16px;

  display: flex;
  gap: 4px;

  overflow-x: auto;
`

const CountText = styled.div`
  font-weight: 500;
  font-size: 12px;

  padding: 4px 17px;
`

const Highlight = styled.span`
  color: #4463FF;
`

export const FacilityListPage: FC<FacilityListPageProps> = () => {
    const navigate = useNavigate();
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

    const onOpenLocationSheet = useBottomSheetSelector(
        "위치",
        (onClose) => {
            return <LocationSelectSheet/>
        }
    )


    return (
        <PageLayout>
            <MobileLayout
                top={(
                    <SearchAppBar
                        onPrevClick={() => navigate(-1, {replace : true})}
                        onSearch={() => {}}
                    />
                )}
            >
                <SearchChipWrap>
                    <SearchChip
                        label={"정렬"}
                        value={undefined}
                        onClick={onOpenSortSheet}
                    />
                    <SearchChip
                        label={"위치"}
                        value={undefined}
                        onClick={onOpenLocationSheet}
                    />
                    <SearchChip
                        label={"시설 유형"}
                        value={searchReq.facilityType}
                        onClick={onOpenTypeSheet}
                    />
                    <SearchChip
                        label={"시설 등급"}
                        value={searchReq.grade}
                        onClick={onOpenGradeSheet}
                    />

                    <SearchChip
                        label={"비용"}
                        value={searchReq.minPrice?.toString()}
                        onClick={onOpenPriceSheet}
                    />

                    <SearchChip
                        label={"설립 연도"}
                        value={searchReq.withinYears ? `${searchReq.withinYears}년 이내` : undefined}
                        onClick={onOpenWithInYearSheet}
                    />


                </SearchChipWrap>

                {isLoading && "로딩중"}
                {error && "에러"}
                {data && (
                    <>
                        <CountText>
                            총 <Highlight>{data.length}</Highlight> 개의 검색결과
                        </CountText>
                        {data.map(d => (
                            <FacilityListItem key={d.id} facility={d}/>
                        ))}
                    </>
                )}
            </MobileLayout>
        </PageLayout>
    );
};