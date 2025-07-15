import styled, {css} from "styled-components";

export type SpaceProps = { v: number; color?: string } | { h: number; color?: string }

export const Space = styled.div<SpaceProps>`
  background-color: ${p => p.color ?? "unset"};
  
  ${({v}) => v && css`
    height: ${v}px;
  `}
  ${({h}) => h && css`
    width: ${h}px;
    display: inline-block;
  `}
`