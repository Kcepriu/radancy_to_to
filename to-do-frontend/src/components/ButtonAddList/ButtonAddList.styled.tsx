import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  gap: 8px;
  padding: 4px 24px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid gray;

  background-color: 808080;
  cursor: pointer;

  &:hover {
    background-color: #bbb2e9;
  }
`;
