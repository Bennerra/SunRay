import React, { FC } from "react";

import { LoginForm } from "@/components/login-page/LoginForm";
import { Header } from "../../components/common/Header";

const Login: FC = () => (
  <main>
    <Header />
    <LoginForm />
  </main>
);

export default Login;
