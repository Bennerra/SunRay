import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { theme } from "./styles/theme";
import { Wrapper } from "./styles/components";
import GlobalStyles from "./styles/global";

import { LoginForm } from "./components/login-page/LoginForm";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
          </Routes>
        </Router>
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
