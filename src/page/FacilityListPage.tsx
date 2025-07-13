import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../MobileLayout";
import {useFacility} from "../context/FacilityContext";
import {useQuery} from "@tanstack/react-query";
import {FacilityListItem} from "../component/atom/FacilityListItem";


export type FacilityListPageProps = {}

const FacilityListPageStyle = styled.div`
`

export const FacilityListPage: FC<FacilityListPageProps> = () => {
    const {searchFacility} = useFacility();
    const {isLoading, data, error} = useQuery({
        queryKey: [],
        queryFn: async () => await searchFacility({}),
        staleTime: 1000 * 3,
    })

    return (
        <PageLayout>
            <MobileLayout>
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