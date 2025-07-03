import {FC, ReactNode} from "react";
import styled from "styled-components";

export type MobileLayoutProps = {
    top: ReactNode;
    bottom: ReactNode;
    children: ReactNode;
}

const MobileLayoutStyle = styled.div`
  height: calc(var(--100vh));
  display: flex;
  flex-direction: column;
`

const TopWrapper = styled.div``

const BodyWrapper = styled.div`
  flex: 1;
`

const BottomWrapper = styled.div`
`

export const MobileLayout: FC<MobileLayoutProps> = ({top, bottom, children}) => {
    return (
        <MobileLayoutStyle>
            <TopWrapper>{top}</TopWrapper>
            <BodyWrapper>
                {children}
            </BodyWrapper>
            <BottomWrapper>{bottom}</BottomWrapper>
        </MobileLayoutStyle>
    );
};