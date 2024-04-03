import styled from "styled-components";

export const WrapPage = styled.div`
  max-width: 550px;
  width: 100vw;
  padding: 24px;
  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    width: 550px;
  }
`;
