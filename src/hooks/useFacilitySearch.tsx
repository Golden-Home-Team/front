import {FacilitySearchReq, FacilityType} from "../types/facility";
import {useSearchParams} from "react-router-dom/dist";

export function useFacilitySearch(): { searchReq: FacilitySearchReq, updateSearchParam: (key: string, value: string) => void } {
    const [params, setParams] = useSearchParams();

    //todo: 이 방법이 최선일까?
    const searchReq: FacilitySearchReq = {
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