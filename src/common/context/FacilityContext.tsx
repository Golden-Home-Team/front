import {createContext, FC, ReactNode, useContext} from "react";
import * as qs from "qs";
import axios from "axios";
import {Facility, FacilitySearchReq, FacilityType} from "../../domains/facility/types/facility";

interface FacilityContextProps {
    getFacility: (id: Facility["id"]) => Promise<Facility>;
    searchFacility: (req : FacilitySearchReq) => Promise<Facility[]>;
}

const FacilityContext = createContext<FacilityContextProps | null>(null)

export const useFacility = () => {
    const context = useContext(FacilityContext)

    if (!context) {
        throw new Error("useFacility must be used within a FacilityProvider")
    }

    return context
}

interface FacilityProviderProps {
    children: ReactNode
}


export const FacilityProvider: FC<FacilityProviderProps> = ({children}) => {
    const getFacility = async (id: Facility["id"]) => {
        const res = await axios.get(`/api/facility/${id}`)
        if(res.status != 200) {
            throw new Error(`Get facility failed with status code ${res.status}`)
        }
        return res.data
    }

    const searchFacility = async (req : FacilitySearchReq) : Promise<Facility[]> => {
        const query = qs.stringify(req, {skipNulls : true});
        const res = await axios.get(`/api/facility/v2/readAll?${query}`);

        if(res.status != 200) {
            throw new Error(`Search facility failed with status code ${res.status}`);
        }

        return res.data;
    };

    return (
        <FacilityContext.Provider value={{getFacility, searchFacility}}>
            {children}
        </FacilityContext.Provider>
    )
}