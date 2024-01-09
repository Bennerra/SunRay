import React, { FC, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  TBuyerLoginFormData,
  TSellerLoginFormData,
} from "../../../models/LoginFormData";
import { loginFormSchema } from "../../../utils/schems/LoginFormSchems";

import { HeaderForm } from "../HeaderForm";
import { RadioList } from "../RadioList";
import { BuyerForm } from "../BuyerForm";
import { SellerForm } from "../SellerForm";

import { SiteContainer, BigButton } from "../../../styles/components";
import { FormLoginLayout, FormTitle } from "./styles";
import { MainForm } from "../../../styles/mainForm";


const LoginForm: FC = () => {
  const [status, setStatus] = useState("");

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<TBuyerLoginFormData | TSellerLoginFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginFormSchema) as any,
  });

  const onSubmit = (data: TBuyerLoginFormData | TSellerLoginFormData) => {
    // eslint-disable-next-line no-console
    console.log(data);
  };

  useEffect(() => {
    setStatus(watch("status"));
  });

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
            {status === "buyer" && (
              <BuyerForm errors={errors} control={control} />
            )}
            {status === "seller" && (
              <SellerForm errors={errors} control={control} />
            )}
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
