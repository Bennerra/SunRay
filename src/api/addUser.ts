import instance from "@/api/instance";
import { TUser } from "../models/user";

export const addUser = async (data: TUser) => {
  await instance("/users", {
    method: "post",
    data,
  });
};
