import { FieldErrors } from "react-hook-form";
import { TBuyerData, TSellerLoginFormData } from "./LoginFormData";

export type TKeyError = keyof FieldErrors<TBuyerData | TSellerLoginFormData>;
