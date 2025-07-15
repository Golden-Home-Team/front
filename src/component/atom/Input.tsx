import {ComponentPropsWithRef, FC, ReactNode} from "react";
import styled, {css} from "styled-components";

type InputStyleProps = {
    borderRadius?: string;
    borderColor?: string;
};

export type InputProps = {
    value: string;
    onChange: (value: string) => void;
    rightAddon?: ReactNode;
} & InputStyleProps & ComponentPropsWithRef<'input'>

const Container = styled.div`
  display: inline-block;

  position: relative;
`

const InputStyle = styled.input<InputStyleProps>`
  width: 100%;
  font-size: 13px;

  ${p => {
    const {
        borderRadius = p.theme.size.borderRadius,
        borderColor = p.theme.color.inactive,
    } = p;
    return css`
      border: none;
      box-shadow: 0 0 0 1px ${borderColor};
      border-radius: ${borderRadius};
    `
  }};

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