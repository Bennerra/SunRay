import {
  TBuyerLoginFormData,
  TSellerLoginFormData,
} from "@/models/LoginFormData";

export const loginUserData = (
  data: TBuyerLoginFormData | TSellerLoginFormData
) => {
  const { username, password } = data;

  return {
    username,
    password,
  };
};
