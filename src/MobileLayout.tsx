import {FC, ReactNode} from "react";
import styled from "styled-components";

export type MobileLayoutProps = {
    top: ReactNode;
    bottom: ReactNode;
    children: ReactNode;
    isBottomPadding?: boolean;
}

const MobileLayoutStyle = styled.div`
  min-height: calc(var(--100vh));
  display: flex;
  flex-direction: column;
`

const TopWrapper = styled.div``

const BodyWrapper = styled.div`
  flex: 1;
`

const BottomWrapper = styled.div<{ isBottomPadding?: boolean }>`
  padding: ${p => p.isBottomPadding ? '0 16px 52px 16px' : '0px'};
`

export const MobileLayout: FC<MobileLayoutProps> = ({top, bottom, children, isBottomPadding}) => {
    return (
        <MobileLayoutStyle>
            <TopWrapper>{top}</TopWrapper>
            <BodyWrapper>
                {children}
            </BodyWrapper>
            <BottomWrapper
                isBottomPadding={isBottomPadding}
            >{bottom}</BottomWrapper>
        </MobileLayoutStyle>
    );
};