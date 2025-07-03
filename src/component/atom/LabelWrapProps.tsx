import {FC, ReactNode} from "react";
import styled from "styled-components";

export type LabelWrapProps = {
    label: string;
    children: ReactNode;
}
const LabelWrapStyle = styled.label`
  display: inline-block;
`
const Label = styled.div`
  font-size: 14px;
  font-weight: 500;
`
const InputWrap = styled.div`
  padding: 8px 0;
  
  & > * {
    width : 100%;
  }
`
export const LabelWrap: FC<LabelWrapProps> = ({label, children}) => {
    return (
        <LabelWrapStyle>
            <Label>{label}</Label>
            <InputWrap>
                {children}
            </InputWrap>
        </LabelWrapStyle>
    );
};