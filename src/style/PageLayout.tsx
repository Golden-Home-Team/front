import styled from "styled-components";

export const PageLayout = styled.div`
  & > * {
    max-width: ${p => p.theme.size.mobileMaxWidth};
    margin: 0 auto;

    box-shadow: 0 3px 3px rgba(101, 101, 101, 0.37);
  }
`