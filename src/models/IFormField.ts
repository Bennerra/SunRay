import { FieldPath } from "react-hook-form";

export type IFormField = {
  label: string;
  name: FieldPath<any>;
  type: string;
};
