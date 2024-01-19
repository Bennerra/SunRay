import React, { FC, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

import {
  TBuyerLoginFormData,
  TFormData,
  TSellerLoginFormData,
} from "@/models/LoginFormData";
import { loginFormSchema } from "../../../utils/scheme/LoginFormSchems";
import { defineUser } from "../../../utils/defineUser";
import { addBuyerUser, addSellerUser } from "@/store/userSlice";
import { useAppDispatch } from "@/hooks/redux";
import { addUser } from "@/api/addUser";
import resetFields from "@/mocks/ResetFields.json";
import { field } from "./types";

import { LoginFormLayout } from "@/layouts/LoginFormLayout";
import { SellerForm } from "../SellerForm";
import { RadioList } from "../RadioList";
import { BuyerForm } from "../BuyerForm";

import { SiteContainer } from "@/styles/components";
import { loginUser } from "../../../api/loginUser";

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
    resolver: yupResolver(loginFormSchema) as any,
  });

  const onSubmit = async (data: TBuyerLoginFormData | TSellerLoginFormData) => {
    if (selectedStatus === "buyer") {
      const user = defineUser(data as TBuyerLoginFormData);
      try {
        dispatch(addBuyerUser(user));
        await addUser(user);
        await loginUser({
          username: "mor_2314",
          password: "83r5^_",
        });
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
      }
    } else {
      dispatch(addSellerUser(data as TSellerLoginFormData));
    }
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
      <SiteContainer>
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
      </SiteContainer>
    </>
  );
};

export default LoginForm;
