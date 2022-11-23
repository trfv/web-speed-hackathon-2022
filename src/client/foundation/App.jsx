import React from "react";
import { BrowserRouter } from "react-router-dom";
import { StyleSheetManager } from "styled-components";

import { AuthContextProvider } from "./contexts/AuthContext";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/GlobalStyle";

/** @type {React.FC} */
export const App = () => {
  return (
    <StyleSheetManager disableCSSOMInjection>
      <AuthContextProvider>
        <GlobalStyle />
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </AuthContextProvider>
    </StyleSheetManager>
  );
};
