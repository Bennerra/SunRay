import React, { FC, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  TBuyerLoginFormData,
  TFormData,
  TSellerLoginFormData,
} from "@/models/LoginFormData";
import { loginFormScheme } from "@/utils/scheme/LoginFormScheme";
import { getUserToken } from "@/utils/getUserToken";
import { addBuyerUser, setSellerUser } from "@/store/userSlice";
import { useAppDispatch } from "@/hooks/redux";
import resetFields from "@/mocks/ResetFields.json";
import { loginUser } from "@/api/loginUser";

import { LoginFormLayout } from "@/layouts/LoginFormLayout";
import { SellerForm } from "../SellerForm";
import { RadioList } from "../RadioList";
import { BuyerForm } from "../BuyerForm";

import { field } from "./types";

const LoginForm: FC = () => {
  const [selectedStatus, setSelectedStatus] = useState("");
  const dispatch = useAppDispatch();

  const {
    control,
    handleSubmit,
    watch,
    resetField,
    formState: { errors },
  } = useForm<TFormData>({
    mode: "onBlur",
    resolver: yupResolver(loginFormScheme) as any,
  });

  const onSubmit = async (data: TBuyerLoginFormData | TSellerLoginFormData) => {
    if (selectedStatus === "buyer") {
      dispatch(addBuyerUser(data as TBuyerLoginFormData));
    } else {
      dispatch(setSellerUser(data as TSellerLoginFormData));
    }
    await loginUser({
      username: "mor_2314",
      password: "83r5^_",
    });
    getUserToken(dispatch);
  };

  useEffect(() => {
    setSelectedStatus(watch("status"));
  }, [watch("status")]);

  useEffect(() => {
    resetFields.forEach((name: field) => {
      resetField(name);
    });
  }, [selectedStatus]);

  return (
    <>
      <LoginFormLayout handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <RadioList
          helperText={errors?.status?.message}
          name="status"
          control={control}
        />
        {selectedStatus === "buyer" && (
          <BuyerForm errors={errors} control={control} />
        )}
        {selectedStatus === "seller" && (
          <SellerForm errors={errors} control={control} />
        )}
      </LoginFormLayout>
    </>
  );
};

export default LoginForm;
