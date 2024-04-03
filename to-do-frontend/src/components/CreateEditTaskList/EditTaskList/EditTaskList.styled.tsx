import styled from "styled-components";

export const WrapTitle = styled.div`
  display: flex;
  flex-direction: column-reverse;

  gap: 32px;
  min-height: 60px;

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const WrapButton = styled.div`
  min-width: 130px;
`;
