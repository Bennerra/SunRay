import React, { FC, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import { TBuyerLoginFormData, TFormData } from "@/models/LoginFormData";
import { loginFormSchema } from "../../../utils/schemes/LoginFormSchems";
import { field } from "./types";
import resetFields from "@/mocks/ResetFields.json";

import { RadioList } from "../RadioList";
import { BuyerForm } from "../BuyerForm";
import { SellerForm } from "../SellerForm";

import { SiteContainer } from "@/styles/components";
import { LoginFormLayout } from "@/layouts/LoginFormLayout";
import { useAppDispatch } from "@/hooks/redux";
import { addBuyerUser } from "@/store/userSlice";
import { addUser } from "@/api/addUser";
import { defineUser } from "../../../utils/defineUser";

const LoginForm: FC = () => {
  const [status, setStatus] = useState("");
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<TFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginFormSchema) as any,
  });

  const onSubmit = async (data: TBuyerLoginFormData) => {
    const user = defineUser(data);
    try {
      dispatch(addBuyerUser(user));
      await addUser(user);

      // eslint-disable-next-line no-console
      console.log(data);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.log(error);
    }
  };

  useEffect(() => {
    setStatus(watch("status"));
  });

  useEffect(() => {
    resetFields.forEach((name: field) => {
      resetField(name);
    });
  }, [status]);

  return (
    <>
      <SiteContainer>
        <LoginFormLayout handleSubmit={handleSubmit} onSubmit={onSubmit}>
          <RadioList
            helperText={errors?.status?.message}
            name="status"
            control={control}
          />
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
