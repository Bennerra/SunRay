import { FieldPath } from "react-hook-form";

export interface IFormFieldProps {
  name: FieldPath<any>;
  control: any;
  label: string;
  type: string;
  helperText: string | undefined;
  error: boolean | undefined;
  required: boolean;
}
