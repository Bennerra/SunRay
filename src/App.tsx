import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { theme } from "./styles/theme";
import GlobalStyles from "./styles/global";

import { LoginForm } from "./components/login-page/LoginForm";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<LoginForm />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
