import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material";

import { Login } from "@/pages/Login";
import { Buyers } from "@/pages/Buyers";
import { UpdateUser } from "@/pages/UpdateUser";
import { Header } from "@/components/common/Header";

import { theme } from "@/styles/theme";
import { Wrapper } from "@/styles/components";
import GlobalStyles from "@/styles/global";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <Wrapper>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/buyers" element={<Buyers />} />
            <Route path="/buyers/user/:id" element={<UpdateUser />} />
          </Routes>
        </Router>
        <GlobalStyles />
      </Wrapper>
    </ThemeProvider>
  );
};

export default App;
