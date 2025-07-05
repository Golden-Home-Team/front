import {FC, ReactNode} from "react";
import styled from "styled-components";

export type BaseAppBarProps = {
    left?: ReactNode;
    center?: ReactNode;
    right?: ReactNode;
}
const BaseAppBarStyle = styled.div`
  padding: 16px;
  
  display: flex;
  justify-content: space-between;
`
const LeftWrap = styled.div`
  min-width: 48px;
`
const CenterWrap = styled.div`
  min-width: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const RightWrap = styled.div`
  min-width: 48px;
`
export const BaseAppBar: FC<BaseAppBarProps> = ({left, center, right}) => {
    return (
        <BaseAppBarStyle>
            <LeftWrap>{left}</LeftWrap>
            <CenterWrap>{center}</CenterWrap>
            <RightWrap>{right}</RightWrap>
        </BaseAppBarStyle>
    );
};