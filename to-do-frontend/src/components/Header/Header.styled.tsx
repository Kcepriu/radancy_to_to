import styled from "styled-components";

export const WrapHeader = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px 0;
  gap: 12px;
  justify-content: space-between;

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    flex-direction: row;
  }
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 12px;
  justify-content: space-between;
  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.tablet}) {
    justify-content: end;
  }
`;
