import {FacilitySearchReq, FacilityType} from "../types/facility";
import {useSearchParams} from "react-router-dom";
import {number} from "motion";

export function useFacilitySearch() {
    const [params, setParams] = useSearchParams();

    const getNumber = (key : string) : number | null => {
        const value = params.get(key)
        if(value == "" || value == null) {
            return null
        }

        const number = Number(value)
        if(isNaN(number)) {
            return null
        }

        return number
    }

    //todo: 이 방법이 최선일까?
    const searchReq: FacilitySearchReq = {
        query: params.get('query'),
        address: params.get('address'),
        facilityType: params.get('facilityType') as FacilityType,
        grade: params.get('grade'),
        minPrice: getNumber("minPrice"),
        maxPrice: getNumber("maxPrice"),
        withinYears: getNumber("withinYears"),
        page: getNumber("page"),
        size: getNumber("size"),
    };
    const updateSearchParam = (key: string, value: string | number) => {
        const next = new URLSearchParams(params);
        next.set(key, String(value));
        setParams(next, {replace: true});
    };

    return {searchReq, updateSearchParam}
}