import {FC, ReactNode} from "react";
import styled from "styled-components";

export type LabelWrap = {
    label: string;
    children: ReactNode;
}
const LabelWrapStyle = styled.label`
  display: flex;
  flex-direction: column;
`
const Label = styled.div`
  font-size: 14px;
  font-weight: bold;
`
const InputWrap = styled.div`
  padding: 8px;
  
  & > * {
    width : 100%;
  }
`
export const LabelWrap: FC<LabelWrap> = ({label, children}) => {
    return (
        <LabelWrapStyle>
            <Label>{label}</Label>
            <InputWrap>
                {children}
            </InputWrap>
        </LabelWrapStyle>
    );
};