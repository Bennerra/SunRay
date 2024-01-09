import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { theme } from "./styles/theme";
import { Wrapper } from "./styles/components";
import GlobalStyles from "./styles/global";

import { Login } from "./pages/Login";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
        </Router>
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
