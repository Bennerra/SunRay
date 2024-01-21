import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { Login } from "./pages/Login";
import { Buyers } from "./pages/Buyers";

import { theme } from "./styles/theme";
import { Wrapper } from "./styles/components";
import { Header } from "./components/common/Header";

import GlobalStyles from "./styles/global";

const App = () => (
  <ThemeProvider theme={theme}>
    <Wrapper>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/buyers" element={<Buyers />} />
        </Routes>
      </Router>
      <GlobalStyles />
    </Wrapper>
  </ThemeProvider>
);

export default App;
