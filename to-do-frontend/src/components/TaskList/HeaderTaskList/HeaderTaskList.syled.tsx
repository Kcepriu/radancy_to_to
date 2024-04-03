import styled from "styled-components";

export const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 0;
  border-top: 1px solid gray;
  border-bottom: 1px solid gray;
`;

export const WrapRight = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  cursor: pointer;
  border: none;
  background-color: white;
  &:hover {
    color: #bbb2e9;
  }
`;
