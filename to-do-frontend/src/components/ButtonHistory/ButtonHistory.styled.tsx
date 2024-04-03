import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  gap: 8px;
  padding: 4px 8px;
  align-items: center;
  border-radius: 12px;
  border: 1px solid gray;

  background-color: white;
  cursor: pointer;

  &:hover {
    background-color: #bbb2e9;
  }
`;
