import {createContext, FC, ReactNode, useContext} from "react";

interface FacilityContextProps {

}

const FacilityContext = createContext<FacilityContextProps | null>(null)

export const useFacility = () => {
    const context = useContext(FacilityContext)

    if(!context) {
        throw new Error("useFacility must be used within a FacilityProvider")
    }

    return context
}

interface FacilityProviderProps {
    children: ReactNode
}

export const FacilityProvider : FC<FacilityProviderProps> = ({children}) => {
    return (
        <FacilityContext.Provider value={{}}>
            {children}
        </FacilityContext.Provider>
    )
}