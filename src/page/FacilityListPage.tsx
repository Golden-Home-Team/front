import {FC, useEffect, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../MobileLayout";
import {useFacility} from "../context/FacilityContext";
import {useQuery} from "@tanstack/react-query";
import {FacilityListItem} from "../component/atom/FacilityListItem";
import {FacilitySearchReq, FacilityType} from "../types/facility";
import {ChipSelect} from "../component/atom/ChipSelect";
import {Button} from "../component/atom/Button";


export type FacilityListPageProps = {}

const FacilityListPageStyle = styled.div`
`

export const FacilityListPage: FC<FacilityListPageProps> = () => {
    const {searchFacility} = useFacility();

    const [searchReq, setSearchReq] = useState<FacilitySearchReq>({})

    const {isLoading, data, error, fetchStatus} = useQuery({
        queryKey: ["facilities", searchReq],
        queryFn: async () => await searchFacility(searchReq),
        staleTime: 1000 * 3,
    })

    useEffect(() => {
        console.log(searchReq)
    }, [searchReq])

    return (
        <PageLayout>
            <MobileLayout>
                <ChipSelect
                    name={"시설 유형"}
                    label={"시설 유형"}
                    options={["양로원", "요양원", "단기보호", "방문간호", "방문요양", "방문목욕", "주야간보호"]}
                    onChange={o => setSearchReq({...searchReq, "facilityType" : o as FacilityType})}
                />

                <ChipSelect
                    name={"시설 등급"}
                    label={"시설 등급"}
                    options={["A등급", "B등급", "C등급", "D등급", "E등급"]}
                    onChange={o => setSearchReq({...searchReq, "grade" : o})}
                />

                <ChipSelect
                    name={"설립 연로"}
                    label={"설립 연도"}
                    options={["1", "3", "5", "10"]}
                    onChange={o => setSearchReq({...searchReq, "withinYears" : Number(o)})}
                />

                {isLoading && "로딩중"}
                {error && "에러"}
                {data && (
                    data.map(d => (
                        <FacilityListItem key={d.id} facility={d}>
                            {d.name}
                            {d.address}
                            {d.capacity}
                        </FacilityListItem>
                    ))
                )}
            </MobileLayout>
        </PageLayout>
    );
};