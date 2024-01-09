import React, { FC } from "react";
import { Controller } from "react-hook-form";

import { IFormFieldProps } from "../../../models/IFormFieldProps";

import { FormLoginField } from "../LoginForm/styles";

const FormField: FC<IFormFieldProps> = ({
  name,
  control,
  label,
  type,
  helperText,
  error,
  required,
}) => {
  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value, onBlur } }) => (
        <FormLoginField
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          helperText={helperText}
          error={error}
          color="secondary"
          required={required}
          label={label}
          type={type}
        />
      )}
    />
  );
};

export default FormField;
