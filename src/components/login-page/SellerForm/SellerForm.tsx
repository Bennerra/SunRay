import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";

import { TKeyError } from "../../../models/TKeyError";
import sellerFormFieldsData from "../../../mocks/SellerLoginFields.json";
import { TSellerLoginFormData } from "../../../models/LoginFormData";

import { FormField } from "../FormField";

import { ClientFormLayout } from "../../../styles/components";

interface ISellerFormProps {
  errors: FieldErrors<TSellerLoginFormData>;
  control: any;
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
