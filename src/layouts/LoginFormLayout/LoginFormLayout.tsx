import React, { FC } from "react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form/dist/types/form";

import { TBuyerData, TSellerLoginFormData } from "@/models/LoginFormData";

import { BigButton, FormLayout } from "@/styles/components";
import { MainForm } from "@/styles/mainForm";
import { FormTitle } from "./styles";

interface ILoginFormLayoutProps {
  handleSubmit: UseFormHandleSubmit<TBuyerData | TSellerLoginFormData>;
  onSubmit: SubmitHandler<TBuyerData | TSellerLoginFormData>;
  children: React.ReactNode;
}

const LoginFormLayout: FC<ILoginFormLayoutProps> = ({
  children,
  handleSubmit,
  onSubmit,
}) => (
  <FormLayout>
    <FormTitle color="#353535" variant="h1">
      Присоединяйся к SunRay!
    </FormTitle>
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      {children}
      <BigButton variant="contained" color="primary" type="submit">
        Далее
      </BigButton>
    </MainForm>
  </FormLayout>
);

export default LoginFormLayout;
