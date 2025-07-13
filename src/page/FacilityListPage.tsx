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
import {useSearchParams} from "react-router-dom";


export type FacilityListPageProps = {}

const FacilityListPageStyle = styled.div`
`

function useFacilitySearch() : {searchReq: FacilitySearchReq, updateSearchParam : (key : string, value : string) => void}{
    const [params, setParams] = useSearchParams();

    //todo: 이 방법이 최선일까?
    const searchReq : FacilitySearchReq = {
        query: params.get('query') ?? '',
        address: params.get('address') ?? '',
        facilityType: params.get('facilityType') as FacilityType ?? '',
        grade: params.get('grade') ?? '',
        minPrice: Number(params.get('minPrice') ?? 0),
        maxPrice: Number(params.get('maxPrice') ?? 100000000),
        withinYears: Number(params.get('withinYears') ?? 0),
        page: Number(params.get('page') ?? 1),
        size: Number(params.get('size') ?? 20),
    };
    const updateSearchParam = (key: string, value: string | number) => {
        const next = new URLSearchParams(params);
        next.set(key, String(value));
        setParams(next, {replace: true});
    };

    return {searchReq, updateSearchParam}
}

export const FacilityListPage: FC<FacilityListPageProps> = () => {
    const {searchFacility} = useFacility();
    const {searchReq, updateSearchParam} = useFacilitySearch()

    const {isLoading, data, error, fetchStatus} = useQuery({
        queryKey: ["facilities", searchReq],
        queryFn: async () => await searchFacility(searchReq),
        staleTime: 1000 * 3,
    })

    return (
        <PageLayout>
            <MobileLayout>
                <ChipSelect
                    name={"시설 유형"}
                    label={"시설 유형"}
                    options={["양로원", "요양원", "단기보호", "방문간호", "방문요양", "방문목욕", "주야간보호"]}
                    onChange={o => updateSearchParam("facilityType", o)}
                />

                <ChipSelect
                    name={"시설 등급"}
                    label={"시설 등급"}
                    options={["A", "B", "C", "급", "E"]}
                    onChange={o => updateSearchParam("grade", o)}
                />

                <ChipSelect
                    name={"설립 연로"}
                    label={"설립 연도"}
                    options={["1", "3", "5", "10"]}
                    onChange={o => updateSearchParam("withinYears", o)}
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