import instance from "./instance";
import { TBuyerLoginFormData } from "@/models/LoginFormData";

export const updateUser = async (data: TBuyerLoginFormData, id: string) => {
  await instance(`/users/${id}`, {
    method: "put",
    data,
  }).catch((e) => {
    // eslint-disable-next-line no-console
    console.log(e);
  });
};
