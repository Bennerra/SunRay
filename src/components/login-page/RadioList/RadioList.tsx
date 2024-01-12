import React, { FC } from "react";
import { Controller, FieldPath } from "react-hook-form";
import { Radio } from "@mui/material";

import radioOptions from "@/mocks/LoginRadioOptions.json";

import { RadioLabel, RadioLayout, TextError } from "./styles";

interface IFormProps {
  name: FieldPath<any>;
  control: any;
  helperText: string | undefined;
}

const RadioList: FC<IFormProps> = ({ name, control, helperText }) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field: { onChange, value } }) => (
      <RadioLayout value={value} onChange={(e) => onChange(e)}>
        {radioOptions.map((option) => (
          <RadioLabel
            key={option.value}
            control={<Radio disableRipple />}
            value={option.value}
            label={option.label}
          />
        ))}
        {helperText && <TextError>{helperText}</TextError>}
      </RadioLayout>
    )}
  />
);

export default RadioList;
