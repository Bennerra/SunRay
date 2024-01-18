import React, { FC } from "react";
import { Control, FieldErrors } from "react-hook-form";

import { TKeyError } from "@/models/TKeyError";
import sellerFormFieldsData from "@/mocks/SellerLoginFields.json";
import { TFormData, TSellerLoginFormData } from "@/models/LoginFormData";

import { FormField } from "../FormField";

import { ClientFormLayout } from "@/styles/components";

interface ISellerFormProps {
  errors: FieldErrors<TSellerLoginFormData>;
  control: Control<TFormData>;
}

const SellerForm: FC<ISellerFormProps> = ({ errors, control }) => (
  <ClientFormLayout>
    {sellerFormFieldsData.map((option) => (
      <FormField
        key={option.name}
        control={control}
        helperText={errors?.[option.name as TKeyError]?.message}
        error={!!errors?.[option.name as TKeyError]}
        {...option}
      />
    ))}
  </ClientFormLayout>
);

export default SellerForm;
