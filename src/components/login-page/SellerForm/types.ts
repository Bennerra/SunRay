import { FieldErrors } from "react-hook-form";
import { TSellerLoginFormData } from "../../../models/LoginFormData";

export interface ISellerFormProps {
  errors: FieldErrors<TSellerLoginFormData>;
  control: any;
}
