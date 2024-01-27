import React, { FC } from "react";

import { TUserPoint } from "./types";
import { TGetSingleUser } from "@/models/TGetSingleUser";

import {
  UserAddressTitle,
  UserInfoLayout,
  UserPointsAddressList,
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

const UserInfo: FC<TGetSingleUser> = ({ ...props }) => (
  <UserInfoLayout>
    <UserPointsList>
      {userInfoPoints.map((point) => (
        <UserText key={point.key}>
          <UserTextPoint>{point.text}: </UserTextPoint>
          {props[point.key as keyof TGetSingleUser]}
        </UserText>
      ))}
    </UserPointsList>
    <UserAddressTitle>Адрес:</UserAddressTitle>
    <UserPointsAddressList>
      {userAddressPoints.map((point) => (
        <UserText key={point.key}>
          <UserTextPoint>{point.text}: </UserTextPoint>
          {props[point.key as keyof TGetSingleUser]}
        </UserText>
      ))}
    </UserPointsAddressList>
  </UserInfoLayout>
);

export default UserInfo;
