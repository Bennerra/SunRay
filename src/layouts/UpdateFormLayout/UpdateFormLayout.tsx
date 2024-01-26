import React, { FC } from "react";
import {
  SubmitHandler,
  UseFormHandleSubmit,
} from "react-hook-form/dist/types/form";

import { TBuyerLoginFormData } from "@/models/LoginFormData";

import { BigButton, FormLayout } from "@/styles/components";
import { MainForm } from "@/styles/mainForm";

interface ILoginFormLayoutProps {
  handleSubmit: UseFormHandleSubmit<TBuyerLoginFormData>;
  onSubmit: SubmitHandler<TBuyerLoginFormData>;
  children: React.ReactNode;
}

const UpdateFormLayout: FC<ILoginFormLayoutProps> = ({
  children,
  handleSubmit,
  onSubmit,
}) => (
  <FormLayout>
    <MainForm onSubmit={handleSubmit(onSubmit)}>
      {children}
      <BigButton variant="contained" color="primary" type="submit">
        Сохранить
      </BigButton>
    </MainForm>
  </FormLayout>
);

export default UpdateFormLayout;
