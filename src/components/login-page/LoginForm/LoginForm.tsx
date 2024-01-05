import React, { FC } from "react";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { FieldErrors, useForm } from "react-hook-form";

import FormFieldsData from "../../../mocks/LoginFormFields.json";
import { LoginFormData } from "../../../models/FormData";

import { HeaderForm } from "../HeaderForm";
import { RadioList } from "../RadioList";
import { FormField } from "../FormField";

import { SiteContainer, BigButton } from "../../../styles/components";
import { FormLoginLayout, FormTitle } from "./styles";
import { MainForm } from "../../../styles/mainForm";

const shema = yup.object().shape({
  name: yup.string().required("Это обязательное поле!"),
  lastName: yup.string().required("Это обязательное поле!"),
  companyName: yup.string().required("Это обязательное поле!"),
  inn: yup.string().required("Это обязательное поле!"),
  number: yup.string().required("Это обязательное поле!"),
  email: yup
    .string()
    .required("Это обязательное поле!")
    .email("Некорректный email"),
  password: yup
    .string()
    .required("Это обязательное поле!")
    .min(8, "Пароль должен быть не менее 8 символов"),
});

const LoginForm: FC = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(shema) as any,
  });

  const onSubmit = (data: LoginFormData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  const formFields = FormFieldsData;

  return (
    <>
      <HeaderForm />
      <SiteContainer>
        <FormLoginLayout>
          <FormTitle color="#353535" variant="h1">
            Присоединяйся к SunRay!
          </FormTitle>
          <MainForm onSubmit={handleSubmit(onSubmit)}>
            <RadioList name="status" control={control} />
            {formFields.map((option) => (
              <FormField
                key={option.name}
                name={option.name}
                label={option.label}
                type={option.type}
                control={control}
                helperText={
                  errors?.[option.name as keyof FieldErrors<LoginFormData>]
                    ?.message
                }
                error={
                  !!errors?.[option.name as keyof FieldErrors<LoginFormData>]
                }
              />
            ))}
            <BigButton
              style={{ marginTop: "51px" }}
              variant="contained"
              color="primary"
              type="submit"
            >
              Далее
            </BigButton>
          </MainForm>
        </FormLoginLayout>
      </SiteContainer>
    </>
  );
};

export default LoginForm;
