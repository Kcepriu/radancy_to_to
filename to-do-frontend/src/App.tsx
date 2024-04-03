import React from "react";
import { ThemeProvider } from "styled-components";
import MainLayout from "./layouts/MainLayout/MainLayout";
import * as theme from "./theme";
import * as Styled from "./app.styled";
import Header from "./components/Header/Header";
import TaskBoard from "./components/TaskBoard/TaskBoard";
import InitialStore from "./components/InitialStore/InitialStore";

import { WrapPage, WrapBody } from "./App.styled";
import "./App.css";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Styled.GlobalStyles />
      <InitialStore>
        <MainLayout>
          <WrapPage>
            <Header />
            <WrapBody>
              <TaskBoard />
            </WrapBody>
          </WrapPage>
        </MainLayout>
      </InitialStore>
    </ThemeProvider>
  );
}

export default App;
