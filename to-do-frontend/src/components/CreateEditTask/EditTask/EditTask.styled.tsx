import styled from "styled-components";

import { Select } from "@mui/material";

export const WrapTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column-reverse;
  gap: 8px;
  justify-content: start;

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.tablet}) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 60px;
  }
`;

export const WrapInformation = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const LineInformation = styled.div`
  display: flex;
  align-items: center;
  height: 40px;
  overflow-x: hidden;
`;

export const TitleLine = styled.div`
  color: #5a5959;
  display: flex;
  gap: 12px;
  min-width: 115px;

  @media screen and (min-width: ${(props) => props.theme.BREAKPOINT.tablet}) {
    width: 130px;
  }
`;

export const TitleDescription = styled.h3`
  margin-top: 24px;
`;

export const WrapDescription = styled.div`
  margin-top: 16px;
  height: 155px;
`;

export const SelectPriority = styled(Select)`
  .MuiSelect-select::first-letter {
    text-transform: uppercase;
  }
`;

export const TextSelectPriority = styled.span`
  &::first-letter {
    text-transform: uppercase;
  }
`;

export const WrapDate = styled.div`
  display: block;

  max-width: 215px;
  width: auto;
`;
