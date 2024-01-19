import { TLoginData } from "../models/TLoginData";
import instance from "./instance";

export const loginUser = async (data: TLoginData) => {
  await instance("/auth/login", {
    method: "post",
    data,
  });
};
