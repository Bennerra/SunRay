import { FieldErrors } from "react-hook-form";
import { TBuyerLoginFormData, TSellerLoginFormData } from "./LoginFormData";

export type TKeyError = keyof FieldErrors<
  TBuyerLoginFormData | TSellerLoginFormData
>;
