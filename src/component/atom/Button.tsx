import {ComponentPropsWithRef, FC, ReactNode} from "react";
import styled, {css} from "styled-components";
import {darken, lighten} from 'polished';

export type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    color?: string;
    background?: string;
    isDisabled?: boolean;
    borderRadius?: string;
    $isFullWidth?: boolean;
} & ComponentPropsWithRef<'button'>;

const Color = css`
  ${p => {
    let {
      background = p.theme.color.GoldenHome,
      color = "#FFFFFF"
    } = p;

    if (Object.hasOwn(p.theme.color, background)) {
      background = p.theme.color[background];
    }

    if (Object.hasOwn(p.theme.color, color)) {
      color = p.theme.color[color];
    }


    return css`
      color: ${color};
      background-color: ${background};

      ${p => p.isDisabled && css`
        &:hover {
          background-color: ${darken(0.02, background)};
        }

        &:active {
          background-color: ${lighten(0.02, background)};
        }
      `}
    `
  }}
`

const ButtonStyle = styled.button<ButtonProps>`
  ${Color};
  width: ${p => p.$isFullWidth ? '100%' : 'auto'};
  font-size: 14px;

  padding: 10px 20px;
  border: none;
  border-radius: ${p => p.borderRadius ?? p.theme.size.borderRadius};
  
  display: flex;
  align-items: center;
  justify-content: center;

  cursor: pointer;
  user-select: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const Button: FC<ButtonProps>
    = ({children, onClick, isDisabled, ...rest}) => {

    return (
        <ButtonStyle
            disabled={isDisabled}
            onClick={() => onClick()} {...rest}>
            {children}
        </ButtonStyle>
    );
};