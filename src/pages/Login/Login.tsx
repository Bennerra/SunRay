import React, { FC } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "@/hooks/redux";

import { LoginForm } from "@/components/login-page/LoginForm";

const Login: FC = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  return (
    <main>
      {isAuth && <Navigate to="/buyers" />}
      <LoginForm />
    </main>
  );
};

export default Login;
