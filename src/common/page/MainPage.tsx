import {FC} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {MobileLayout} from "../../MobileLayout";
import {Button} from "../../component/atom/Button";
import {Link} from "react-router-dom";
import {RoutePath} from "../../RoutePath";
import {useFacility} from "../../domains/facility/context/FacilityContext";
import {HomeAppBar} from "../../component/molecules/HomeAppBar";


export type MainPageProps = {}

const MainPageStyle = styled.div`
`


export const MainPage: FC<MainPageProps> = () => {
    const {getFacility} = useFacility();


    return (
        <PageLayout>
            <MobileLayout
                top={(
                    <HomeAppBar/>
                )}
            >
                <Link to={RoutePath.signUp}>
                    <Button onClick={() => {
                    }}>회원가입</Button>
                </Link>

                <Link to={RoutePath.login}>
                    <Button onClick={() => {
                    }}>로그인</Button>
                </Link>

                <Button onClick={() => {
                    // const data = getFacilities("양로원", null, null)
                    // console.log(data)
                    console.log(getFacility(1))
                }}>
                    클릭
                </Button>
            </MobileLayout>
        </PageLayout>
    );
};