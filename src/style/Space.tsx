import styled, {css} from "styled-components";

export type SpaceProps = { v: number } | { h: number }
export const Space = styled.div<SpaceProps>`
  ${({v}) => v && css`
    height: ${v}px;
  `}
  ${({h}) => h && css`
    width: ${h}px;
    display: inline-block;
  `}
`