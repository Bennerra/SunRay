import React, { FC } from "react";

import { HeaderForm } from "../../components/login-page/HeaderForm";
import { LoginForm } from "../../components/login-page/LoginForm";

const Login: FC = () => {
  return (
    <main>
      <HeaderForm />
      <LoginForm />
    </main>
  );
};

export default Login;
