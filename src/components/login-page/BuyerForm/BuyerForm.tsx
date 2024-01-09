import React, { FC } from "react";
import { FieldErrors } from "react-hook-form";

import BuyerFormFieldsData from "../../../mocks/BuyerLoginFields.json";
import { IBuyerFormProps } from "../../../models/IBuyerFormProps";
import {
  TBuyerLoginFormData,
  TSellerLoginFormData,
} from "../../../models/LoginFormData";

import { FormField } from "../FormField";

const BuyerForm: FC<IBuyerFormProps> = ({ control, errors }) => {
  const buyerFormFields = BuyerFormFieldsData;

  return (
    <>
      {buyerFormFields.map((option) => (
        <FormField
          key={option.name}
          control={control}
          helperText={
            errors?.[
              option.name as keyof FieldErrors<
                TBuyerLoginFormData | TSellerLoginFormData
              >
            ]?.message
          }
          error={
            !!errors?.[
              option.name as keyof FieldErrors<
                TBuyerLoginFormData | TSellerLoginFormData
              >
            ]
          }
          {...option}
        />
      ))}
    </>
  );
};

export default BuyerForm;
