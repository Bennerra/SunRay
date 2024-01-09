import React, { FC } from "react";
import { Controller, FieldPath } from "react-hook-form";
import { FormControlLabel, Radio } from "@mui/material";

import radioOptions from "../../../mocks/LoginRadioOptions.json";

import { RadioLayout } from "./styles";

interface IFormProps {
  name: FieldPath<any>;
  control: any;
}

const RadioList: FC<IFormProps> = ({ name, control }) => (
  <Controller
    name={name}
    control={control}
    defaultValue=""
    render={({ field: { onChange, value } }) => (
      <RadioLayout value={value} onChange={(e) => onChange(e)}>
        {radioOptions.map((option) => (
          <FormControlLabel
            key={option.value}
            control={<Radio disableRipple />}
            value={option.value}
            label={option.label}
          />
        ))}
      </RadioLayout>
    )}
  />
);

export default RadioList;
