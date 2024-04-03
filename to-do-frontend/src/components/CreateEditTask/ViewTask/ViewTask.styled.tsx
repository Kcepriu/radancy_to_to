import styled from "styled-components";

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
`;

export const TitleLine = styled.div`
  color: #5a5959;
  display: flex;
  gap: 12px;
  width: 115px;
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
  width: 100%;
`;

export const Description = styled.p`
  max-width: 100%;
`;

export const Priority = styled.p`
  &::first-letter {
    text-transform: uppercase;
  }
`;
