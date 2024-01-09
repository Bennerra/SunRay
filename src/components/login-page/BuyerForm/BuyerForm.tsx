import React, { FC } from "react";

import BuyerFormFieldsData from "../../../mocks/BuyerLoginFields.json";
import { IBuyerFormProps } from "./types";
import { TKeyError } from "../../../models/TKeyError";

import { FormField } from "../FormField";
import { ClientFormLayout } from "../../../styles/components";

const BuyerForm: FC<IBuyerFormProps> = ({ control, errors }) => {
  const buyerFormFields = BuyerFormFieldsData;

  return (
    <ClientFormLayout>
      {buyerFormFields.map((option) => (
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
};

export default BuyerForm;
