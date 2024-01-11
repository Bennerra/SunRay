import React, { FC, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  TBuyerLoginFormData,
  TSellerLoginFormData,
} from "@/models/LoginFormData";
import { loginFormSchema } from "@/utils/schems/LoginFormSchems";

import { RadioList } from "../RadioList";
import { BuyerForm } from "../BuyerForm";
import { SellerForm } from "../SellerForm";

import { SiteContainer } from "@/styles/components";
import { LoginFormLayout } from "@/layouts/LoginFormLayout";

const LoginForm: FC = () => {
  const [status, setStatus] = useState("");

  const {
    control,
    handleSubmit,
    watch,
    resetField,
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

  useEffect(() => {
    resetField("email");
    resetField("number");
    resetField("inn");
    resetField("companyName");
  }, [status]);

  return (
    <>
      <SiteContainer>
        <LoginFormLayout handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <RadioList name="status" control={control} />
          {status === "buyer" && (
            <BuyerForm errors={errors} control={control} />
          )}
          {status === "seller" && (
            <SellerForm errors={errors} control={control} />
          )}
        </LoginFormLayout>
      </SiteContainer>
    </>
  );
};

export default LoginForm;
