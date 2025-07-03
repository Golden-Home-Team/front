import {ComponentPropsWithRef, FC, ReactNode} from "react";
import styled from "styled-components";

export type InputProps = {
    value: string;
    onChange: (value: string) => void;
    rightAddon?: ReactNode;
} & ComponentPropsWithRef<'input'>

const Container = styled.div`
  display: inline;

  position: relative;
`

const InputStyle = styled.input`
  font-size: 13px;

  box-shadow: 0 0 0 1px #A7A7A7;
  border: none;
  border-radius: 5px;
  outline: none;
  padding: 10px;

  &::placeholder {
    color: #A7A7A7;
  }
`

const RightAddonStyle = styled.div`
  display: flex;
  
  position: absolute;
  right: 14px;
  top: 50%;
  
  transform: translateY(-50%)
`

export const Input: FC<InputProps> = ({value, onChange, rightAddon, ...rest}) => {
    return (
        <Container>
            <InputStyle
                value={value}
                onChange={(e) => onChange(e.target.value)}
                {...rest}
            />
            <RightAddonStyle>
                {rightAddon && rightAddon}
            </RightAddonStyle>
        </Container>
    );
};