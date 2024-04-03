import styled from "styled-components";

export const WrapCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  border: 1px solid gray;
  border-radius: 4px;
  padding: 8px;
  &[data-is-hover="true"] {
    border-color: blue;
  }
`;

export const WrapHeader = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapContend = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  cursor: pointer;
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

export const WrapDate = styled.div`
  display: flex;
  gap: 12px;

  align-items: center;
  padding: 4px 0;
`;

export const WrapPriority = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  width: fit-content;
  padding: 4px 16px;

  border-radius: 20px;
  background-color: #bbb2e9;

  &::before {
    content: " ";
    width: 8px;
    height: 8px;
    display: block;
    border-radius: 50%;
    background-color: orange;
  }
  &[data-status="low"]::before {
    background-color: green;
  }
  &[data-status="medium"]::before {
    background-color: orange;
  }
  &[data-status="high"]::before {
    background-color: red;
  }
`;

export const Priority = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;
