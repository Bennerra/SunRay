import { FieldErrors } from "react-hook-form";
import { TBuyerLoginFormData } from "./LoginFormData";

export interface IBuyerFormProps {
  errors: FieldErrors<TBuyerLoginFormData>;
  control: any;
}
