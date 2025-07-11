import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../MobileLayout";
import {BackCloseAppBar} from "../component/molecules/BackCloseAppBar";
import {Button} from "../component/atom/Button";
import {Link} from "react-router-dom";
import {RoutePath} from "../RoutePath";
import {useFacility} from "../context/FacilityContext";
import {useQuery} from "@tanstack/react-query";


export type FacilityListPageProps = {}

const FacilityListPageStyle = styled.div`
`

export const FacilityListPage: FC<FacilityListPageProps> = () => {
    const {getFacilities} = useFacility();
    const {isLoading, data, error} = useQuery({
        queryKey: [],
        queryFn: async () => await getFacilities("양로원", null, null),
        staleTime: 1000 * 3,
    })

    return (
        <PageLayout>
            <MobileLayout>
                {isLoading && "로딩중"}
                {error && "에러"}
                {data && (
                    data.map(d => (
                        <li style={{padding: "20px"}} key={d.id}>
                            {d.name}
                            {d.address}
                            {d.capacity}
                        </li>
                    ))
                )}
            </MobileLayout>
        </PageLayout>
    );
};