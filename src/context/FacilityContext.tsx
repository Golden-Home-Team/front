import {createContext, FC, ReactNode, useContext} from "react";
import * as qs from "qs";
import axios from "axios";

type FacilityType = "양로원" | "요양원" | "단기보호" | "방문간호" | "방문요양" | "방문목욕" | "주야간보호"

interface FacilityContextProps {
    getFacilities: (type: FacilityType, lastId: FacilityType["id"] | null, pageSize: number | null) => Promise<Facility[]>
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
    const getFacilities = async (type: FacilityType, lastId: FacilityType["id"] | null, pageSize: number | null) => {
        const query = qs.stringify({facilityType: type, lastId, pageSize}, {skipNulls: true})

        const res = await axios.get(`/api/facility/v1/readAll?${query}`)

        if(res.status != 200) {
            throw new Error(`Get Facilities failed with status code ${res.status}`)
        }

        return res.data as Facility[]
    }

    return (
        <FacilityContext.Provider value={{getFacilities}}>
            {children}
        </FacilityContext.Provider>
    )
}