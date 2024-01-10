import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";

import buyerFormFieldsData from "@/mocks/BuyerLoginFields.json";
import { TBuyerLoginFormData } from "@/models/LoginFormData";
import { TKeyError } from "@/models/TKeyError";

import { FormField } from "@/components/login-page/FormField";

import { ClientFormLayout } from "@/styles/components";

interface IBuyerFormProps {
  errors: FieldErrors<TBuyerLoginFormData>;
  control: any;
}

const BuyerForm: FC<IBuyerFormProps> = ({ control, errors }) => (
  <ClientFormLayout>
    {buyerFormFieldsData.map((option) => (
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

export default BuyerForm;
