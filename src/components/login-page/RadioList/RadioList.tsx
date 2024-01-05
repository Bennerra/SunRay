import React, { FC } from "react";
import { Controller, FieldPath } from "react-hook-form";
import { FormControlLabel, Radio } from "@mui/material";

import RadioOptions from "../../../mocks/LoginRadioOptions.json";

import { RadioLayout } from "../LoginForm/styles";

interface IFormProps {
  name: FieldPath<any>;
  control: any;
}

const RadioList: FC<IFormProps> = ({ name, control }) => {
  const generateRadioOptions = () => {
    return RadioOptions.map((option) => (
      <FormControlLabel
        key={option.value}
        control={<Radio disableRipple />}
        value={option.value}
        label={option.label}
      />
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue=""
      render={({ field: { onChange, value } }) => (
        <RadioLayout value={value} onChange={(e) => onChange(e)}>
          {generateRadioOptions()}
        </RadioLayout>
      )}
    />
  );
};

export default RadioList;
