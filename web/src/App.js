import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import {
  createTheme,
  MuiThemeProvider,
  StylesProvider,
} from "@material-ui/core/styles";
import { createGlobalStyle } from "styled-components";

import MainPage from "./components/MainPage/MainPage";

const GlobalStyle = createGlobalStyle`
  body {
    padding: 1em;
    margin: 0 auto;
    font-family: 'Kanit', sans-serif;
  }

  @media (min-width: 600px) {
    body {
      padding: 6em;
    }
  }
  @media (min-width: 960px) {
    body {
      padding: 5em 10em;
    }
  }
  @media (min-width: 1280px) {
    body {
      padding: 5em 20em;
    }
  }
  @media (min-width: 1920px) {
    body {
      padding: 5em 30em;
    }
  }
`;

const theme = createTheme({
  typography: {
    fontFamily: `"Kanit", sans-serif`,
  },
});

const App = () => {
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <StylesProvider injectFirst>
          <GlobalStyle />
          <MainPage />
        </StylesProvider>
      </MuiThemeProvider>
    </Router>
  );
};

export default App;
