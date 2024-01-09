import { FieldErrors } from "react-hook-form";
import { TSellerLoginFormData } from "./LoginFormData";

export interface ISellerFormProps {
  errors: FieldErrors<TSellerLoginFormData>;
  control: any;
}
