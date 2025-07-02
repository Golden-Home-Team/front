import {FC} from "react";
import styled from "styled-components";

export type FooterProps = {}
const FooterStyle = styled.footer`
  color: ${p => p.theme.color.Gray1};
  padding: 12px;
  background-color: ${p => p.theme.color.Gray7};
`
export const Footer: FC<FooterProps> = () => {
    return (
        <FooterStyle>
            푸터
        </FooterStyle>
    );
};