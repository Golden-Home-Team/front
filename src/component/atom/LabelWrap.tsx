import {FC, ReactNode} from "react";
import styled from "styled-components";

export type LabelWrapProps = {
    label: string;
    bottomMessage?: ReactNode;
    isShowBottomMessageSpace?: boolean;
    isFullWidth?: boolean;
    children: ReactNode;
}
const LabelWrapStyle = styled.label<{$isFullWidth?: boolean}>`
  width: ${p => p.$isFullWidth ? '100%' : 'auto'};
  display: inline-block;
`
const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
`
const InputWrap = styled.div`
  padding: 8px 0;

  & > * {
    width: 100%;
  }
`

const Bottom = styled.div<{$isShow : boolean}>`
  min-height: ${p => p.$isShow ? 22 : 0}px;
  color: ${p => p.theme.color.ClickGray};
  font-size: 12px;
  font-weight: 400;
`

export const LabelWrap: FC<LabelWrapProps> = ({label, bottomMessage, isShowBottomMessageSpace, children, isFullWidth}) => {
    return (
        <LabelWrapStyle $isFullWidth={isFullWidth}>
            <Label>{label}</Label>
            <InputWrap>
                {children}
            </InputWrap>
            <Bottom $isShow={isShowBottomMessageSpace}>
                {bottomMessage}
            </Bottom>
        </LabelWrapStyle>
    );
};