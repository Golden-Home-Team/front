import {FC, useState} from "react";
import styled from "styled-components";
import {PageLayout} from "../style/PageLayout";
import {IconButton} from "../component/atom/IconButton";
import {BiCheck} from "react-icons/bi";

export type MainPageProps = {}

const MainPageStyle = styled.div`
`

export const MainPage: FC<MainPageProps> = () => {
    const [name, setName] = useState("")
    return (
        <PageLayout>
            <MainPageStyle>
                <IconButton>
                    <BiCheck/>
                </IconButton>
            </MainPageStyle>
        </PageLayout>
    );
};