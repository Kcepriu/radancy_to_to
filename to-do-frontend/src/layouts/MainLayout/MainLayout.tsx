import React, { FC, ReactNode } from "react";
import { Container } from "./MainLayout.styled";

interface IProps {
  children: ReactNode;
}
const MainLayout: FC<IProps> = ({ children }) => (
  <Container>{children}</Container>
);

export default MainLayout;
