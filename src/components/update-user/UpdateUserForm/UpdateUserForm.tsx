import React, { FC } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "react-router-dom";

import { TBuyerLoginFormData, TFormData } from "@/models/LoginFormData";
import { updateUserFormScheme } from "@/utils/scheme/UpdateUserFormScheme";
import { updateUser } from "@/api/updateUser";

import UpdateFormLayout from "@/layouts/UpdateFormLayout/UpdateFormLayout";
import { BuyerForm } from "@/components/common/BuyerForm";

const UpdateUserForm: FC = () => {
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
