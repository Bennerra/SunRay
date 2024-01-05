import React, { FC } from "react";
import { Controller, FieldPath } from "react-hook-form";
import { FormControlLabel, Radio } from "@mui/material";

import { IOption } from "../../../models/IOption";

import { RadioLayout } from "../LoginForm/styles";

const options: IOption[] = [
  {
    label: "Я продавец",
    value: "seller",
  },
  {
    label: "Я покупатель",
    value: "buyer",
  },
];

interface IFormProps {
  name: FieldPath<any>;
  control: any;
}

const RadioList: FC<IFormProps> = ({ name, control }) => {
  const generateRadioOptions = () => {
    return options.map((option) => (
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
