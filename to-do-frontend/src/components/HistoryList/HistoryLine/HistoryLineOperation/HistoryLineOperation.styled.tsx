import styled from "styled-components";

export const WrapInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
export const LineInformation = styled.p`
  align-items: center;
`;

export const Text = styled.span`
  color: gray;
`;

export const NameTask = styled.span`
  position: relative;
  color: black;
  font-weight: 600;
  padding-left: 12px;
  display: inline-flex;
  margin-left: 8px;
  &::before {
    content: "";
    left: 2px;
    top: 10px;
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: black;
  }
  &::after {
    content: "";
    left: 0;
    top: 8px;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid black;
  }

  &[data-is-task="true"] {
    &::before {
      background-color: red;
      content: none;
    }
  }
`;

export const ChangedParameter = styled.span`
  position: relative;
  color: #5c5a5a;
  font-weight: 600;
  display: inline-flex;

  &::before {
    content: none;
    left: 2px;
    top: 10px;
    position: absolute;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #5c5a5a;
  }
  &::after {
    content: none;
    left: 0;
    top: 8px;
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    border: 1px solid #5c5a5a;
  }

  &[data-is-task="true"] {
    &::before,
    &::after {
      content: "";
    }
    margin-left: 8px;
    padding-left: 12px;
  }
`;

export const DateTask = styled.span`
  font-style: italic;
`;
