import React, { FC } from "react";
import { Controller, FieldPath } from "react-hook-form";

import { FormLoginField } from "./styles";

interface IFormFieldProps {
  name: FieldPath<any>;
  control: any;
  label: string;
  type: string;
  helperText: string | undefined;
  error: boolean | undefined;
  required: boolean;
}

const FormField: FC<IFormFieldProps> = ({
  name,
  control,
  label,
  type,
  helperText,
  error,
  required,
}) => (
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

export default FormField;
