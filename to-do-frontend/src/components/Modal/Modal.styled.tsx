import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  margin-left: auto;
  margin-right: auto;
  background-color: rgba(0, 0, 0, 0.4);

  visibility: visible;
  opacity: 1;
  pointer-events: auto;
`;

export const ModalContainer = styled.div`
  position: relative;
  max-width: 100%;
  overflow-y: auto;
  min-width: 250px;
  border-radius: 8px;
  background-color: white;
  opacity: 1;

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.desktop}) {
    max-width: 95%;
  }
`;

export const CloseBtn = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  display: block;
  width: 24px;
  height: 24px;
  border: none;
  cursor: pointer;
  background-color: transparent;
  color: white;
  &:hover {
    scale: 110%;
  }
`;

export const Header = styled.div`
  width: 100%;
  height: 48px;
  background-color: #0a144b;
`;
