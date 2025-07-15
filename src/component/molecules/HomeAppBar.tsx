import {FC} from "react";
import {BaseAppBar} from "../atom/BaseAppBar";
import Logo from "./../../common/assets/typo_logo.png";
import styled from "styled-components";
import {IconButton} from "../atom/IconButton";
import {BiBell, BiSearch} from "react-icons/bi";

export type HomeAppBarProps = {}

const IconWrap = styled.div`
  display: flex;
  gap: 12px;
`

export const HomeAppBar: FC<HomeAppBarProps> = ({}) => {
    function onSearchClick() {

    }

    function onAlertClick() {

    }

    return (
        <BaseAppBar
            left={
                <img src={Logo}/>
            }
            right={(
                <IconWrap>
                    <IconButton onClick={onSearchClick}>
                        <BiSearch/>
                    </IconButton>

                    <IconButton onClick={onAlertClick}>
                        <BiBell/>
                    </IconButton>
                </IconWrap>
            )}></BaseAppBar>
    );
};