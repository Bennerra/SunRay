import React, {FC} from "react";
import {FormLoginField} from "../LoginForm/styles";
import {Controller, FieldErrors, FieldPath, UseControllerProps} from "react-hook-form";

interface FormFieldProps<T> extends UseControllerProps<T> {
  errors: FieldErrors;
  name: FieldPath<any>;
  control: any;
  label: string;
}

const FormField: FC<FormFieldProps<UseControllerProps>> = ({ name, control, errors, label }) => {
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
          helperText={errors?.[name]?.message}
          error={!!errors?.[name]}
          color="secondary"
          required
          label={label}
        />
      )}
    />
  );
};

export default FormField;