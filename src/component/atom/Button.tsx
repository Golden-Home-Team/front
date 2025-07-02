import {ComponentPropsWithRef, FC, ReactNode} from "react";
import styled, {css} from "styled-components";
import {darken, lighten} from 'polished';

export type ButtonProps = {
    children: ReactNode;
    onClick: () => void;
    color?: string;
    background?: string;
    isDisabled?: boolean;
} & ComponentPropsWithRef<'button'>;

const Color = css`
  ${p => {
    let {
      background = p.theme.color.HeechanBlue,
      color = p.theme.color.Gray0
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

  user-select: none;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }

  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
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