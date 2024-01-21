import { TBuyerData, TSellerLoginFormData } from "../models/LoginFormData";

export const loginUserData = (data: TBuyerData | TSellerLoginFormData) => {
  const { username, password } = data;

  return {
    username,
    password,
  };
};
