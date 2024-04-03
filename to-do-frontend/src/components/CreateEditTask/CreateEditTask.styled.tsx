import styled from "styled-components";

export const WrapPage = styled.div`
  position: relative;
  width: 100vh;
  display: flex;
  height: 500px;

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.tablet}) {
    max-width: 413px;
  }

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    max-width: 768px;
  }
`;

export const WrapTask = styled.div`
  width: 100vw;
  padding: 12px;
  display: block;

  @media screen and (max-width: calc(${(props) =>
      props.theme.BREAKPOINT.desktop} - 1px)) {
    &[data-status="false"] {
      position: absolute;
      white-space: nowrap;
      width: 1px;
      height: 1px;
      overflow: hidden;
      border: 0;
      padding: 0;
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      margin: -1px;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.tablet}) {
    padding: 24px;
  }

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    display: block;
    width: 60%;
  }
`;

export const WrapHistory = styled.div`
  width: 100vw;
  display: none;
  flex-direction: column;
  padding: 24px 12px;
  background-color: #b6b6b6;
  overflow-y: hidden;

  &[data-status="true"] {
    display: flex;
  }

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    display: flex;
    width: 40%;
  }
`;

export const BurgerButton = styled.button`
  position: absolute;

  top: -37px;
  left: 10px;

  width: 115px;
  border-radius: 8px;

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    display: none;
  }
`;
