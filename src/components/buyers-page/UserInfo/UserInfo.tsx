import React, { FC } from "react";
import {
  UserAddressTitle,
  UserInfoLayout,
  UserPointsList,
  UserText,
  UserTextPoint,
} from "./styles";
import { TBuyerLoginFormData } from "@/models/LoginFormData";
import { TUserPoint } from "./types";

const userInfoPoints: TUserPoint[] = [
  { text: "Имя", key: "name" },
  { text: "Фамилия", key: "lastname" },
  { text: "Почта", key: "email" },
  { text: "Номер телефона", key: "phone" },
  { text: "Почтовый индекс", key: "zipcode" },
];
const userAddressPoints: TUserPoint[] = [
  { text: "Город", key: "city" },
  { text: "Улица", key: "street" },
  { text: "Дом", key: "number" },
];

const UserInfo: FC<TBuyerLoginFormData> = ({ ...props }) => {
  return (
    <UserInfoLayout>
      <UserPointsList>
        {userInfoPoints.map((point) => (
          <UserText key={point.key}>
            <UserTextPoint>{point.text}: </UserTextPoint>
            {props[point.key as keyof TBuyerLoginFormData]}
          </UserText>
        ))}
      </UserPointsList>
      <UserAddressTitle>Адрес:</UserAddressTitle>
      <UserPointsList>
        {userAddressPoints.map((point) => (
          <UserText key={point.key}>
            <UserTextPoint>{point.text}: </UserTextPoint>
            {props[point.key as keyof TBuyerLoginFormData]}
          </UserText>
        ))}
      </UserPointsList>
    </UserInfoLayout>
  );
};

export default UserInfo;
