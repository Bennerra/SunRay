import React, { FC } from "react";
import { Navigate } from "react-router-dom";

import { useAppSelector } from "@/hooks/redux";

import { LoginForm } from "@/components/login-page/LoginForm";
import { PageLayout } from "@/layouts/PageLayout";

const Login: FC = () => {
  const isAuth = useAppSelector((state) => state.user.isAuth);

  return (
    <PageLayout>
      {isAuth && <Navigate to="/buyers" />}
      <LoginForm />
    </PageLayout>
  );
};

export default Login;
