import styled from "styled-components";
import { MenuButton } from "@szhsin/react-menu";

export const Button = styled(MenuButton)`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  width: 36px;
  height: 36px;
  background-color: white;
  &:hover {
    color: #bbb2e9;
  }
`;

export const Item = styled.div`
  text-align: left;
  padding: 4px;
  display: flex;
  gap: 12px;
  justify-content: left;
  &[data-is-delete="true"] {
    color: red;
  }
`;
