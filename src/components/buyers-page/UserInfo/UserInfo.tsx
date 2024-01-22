import React, { FC } from "react";

import { TBuyerData } from "@/models/LoginFormData";
import { TUserPoint } from "./types";

import {
  UserAddressTitle,
  UserInfoLayout,
  UserPointsList,
  UserText,
  UserTextPoint,
} from "./styles";

const userInfoPoints: TUserPoint[] = [
  { text: "Имя", key: "name" },
  { text: "Фамилия", key: "lastname" },
  { text: "Почта", key: "email" },
  { text: "Номер телефона", key: "phone" },
];
const userAddressPoints: TUserPoint[] = [
  { text: "Город", key: "city" },
  { text: "Улица", key: "street" },
  { text: "Дом", key: "number" },
  { text: "Почтовый индекс", key: "zipcode" },
  { text: "Широта", key: "lat" },
  { text: "Долгота", key: "long" },
];

const UserInfo: FC<TBuyerData> = ({ ...props }) => {
  return (
    <UserInfoLayout>
      <UserPointsList>
        {userInfoPoints.map((point) => (
          <UserText key={point.key}>
            <UserTextPoint>{point.text}: </UserTextPoint>
            {props[point.key as keyof TBuyerData]}
          </UserText>
        ))}
      </UserPointsList>
      <UserAddressTitle>Адрес:</UserAddressTitle>
      <UserPointsList>
        {userAddressPoints.map((point) => (
          <UserText key={point.key}>
            <UserTextPoint>{point.text}: </UserTextPoint>
            {props[point.key as keyof TBuyerData]}
          </UserText>
        ))}
      </UserPointsList>
    </UserInfoLayout>
  );
};

export default UserInfo;
