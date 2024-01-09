import React, { FC } from "react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form/dist/types/form";

import {
  TBuyerLoginFormData,
  TSellerLoginFormData,
} from "../../../models/LoginFormData";

import { BigButton } from "../../../styles/components";
import { MainForm } from "../../../styles/mainForm";

import { FormLoginLayout, FormTitle } from "./styles";

interface ILoginFormLayout {
  handleSubmit: UseFormHandleSubmit<TBuyerLoginFormData | TSellerLoginFormData>;
  onSubmit: SubmitHandler<TBuyerLoginFormData | TSellerLoginFormData>;
  children: React.ReactNode;
}

const LoginFormLayout: FC<ILoginFormLayout> = ({
  children,
  handleSubmit,
  onSubmit,
}) => {
  return (
    <FormLoginLayout>
      <FormTitle color="#353535" variant="h1">
        Присоединяйся к SunRay!
      </FormTitle>
      <MainForm onSubmit={handleSubmit(onSubmit)}>
        {children}
        <BigButton variant="contained" color="primary" type="submit">
          Далее
        </BigButton>
      </MainForm>
    </FormLoginLayout>
  );
};

export default LoginFormLayout;
