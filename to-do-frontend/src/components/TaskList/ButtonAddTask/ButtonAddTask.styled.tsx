import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  gap: 24px;
  justify-content: center;
  padding: 8px;
  border-radius: 8px;
  border: 1px solid gray;
  cursor: pointer;
  &:hover {
    background-color: #bbb2e9;
  }
`;
