import {ComponentPropsWithRef, FC} from "react";
import styled from "styled-components";

export type InputProps = {
    value: string;
    onChange: (value: string) => void;
} & ComponentPropsWithRef<'input'>

const InputStyle = styled.input`
  font-size: 13px;

  box-shadow: 0 0 0 1px #A7A7A7;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  
  &::placeholder {
    color : #A7A7A7;
  }
`

export const Input: FC<InputProps> = ({value, onChange, ...rest}) => {
    return (
        <InputStyle
            value={value}
            onChange={(e) => onChange(e.target.value)}
            {...rest}
        />
    );
};