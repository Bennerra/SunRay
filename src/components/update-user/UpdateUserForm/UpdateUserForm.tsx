import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";

import { TBuyerLoginFormData, TFormData } from "@/models/LoginFormData";
import { updateUserFormScheme } from "@/utils/scheme/UpdateUserFormScheme";
import { updateUsers } from "@/store/usersSlice";
import { updateUser } from "@/api/updateUser";
import { useAppDispatch } from "@/hooks/redux";

import UpdateFormLayout from "@/layouts/UpdateFormLayout/UpdateFormLayout";
import { BuyerForm } from "@/components/login-page/BuyerForm";

const UpdateUserForm: FC = () => {
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TFormData>({
    mode: "onBlur",
    resolver: yupResolver(updateUserFormScheme) as any,
  });

  const onSubmit = async (data: TBuyerLoginFormData) => {
    if (id) {
      await updateUser(data, id);
      dispatch(updateUsers({ id, data }));
    }
  };

  return (
    <>
      <UpdateFormLayout onSubmit={onSubmit} handleSubmit={handleSubmit}>
        <BuyerForm errors={errors} control={control} />
      </UpdateFormLayout>
    </>
  );
};

export default UpdateUserForm;
