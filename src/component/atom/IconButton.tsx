import styled from "styled-components";
import {color as Color} from "../../style/theme.js";
import {FC, ReactNode} from "react";

type IconButtonProps = {
    color: string,
    size: number,
    background: string,
    children: ReactNode
}

const IconButtonStyle = styled.button<IconButtonProps>`
  width: 36px;
  height: 36px;

  color: ${p => p.color};
  font-size: ${p => p.size}px;
  border: none;
  cursor: pointer;
  border-radius: 100%;

  background-color: ${p => p.background};
  display: inline-flex;
  align-items: center;
  justify-content: center;

  transition: 300ms;

  &:hover {
    background-color: ${p => p.theme.color.Gray2};
  }
`

export const IconButton: FC<IconButtonProps> = ({
  children,
  color = Color.Gray8,
  background = "transparent",
  size = 22,
  ...rest
}) => {
    return (
        <IconButtonStyle color={color} background={background} size={size} {...rest}>
            {children}
        </IconButtonStyle>
    )
}