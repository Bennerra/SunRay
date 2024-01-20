import { TBuyerLoginFormData } from "../../../models/LoginFormData";

export type TUserPoint = {
  text: string;
  key: keyof TBuyerLoginFormData;
};
