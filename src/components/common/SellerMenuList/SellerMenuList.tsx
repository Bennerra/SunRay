import React, { FC } from "react";

import { TSellerMenuItem } from "@/models/TSellerMenuItem";

import ProfileIcon from "@/assets/profile.svg";
import GoodsIcon from "@/assets/goods.svg";
import BuyersIcon from "@/assets/buyers.svg";
import { SellerMenuItem } from "../SellerMenuItem";

import { SellerMenuListLayout } from "./styles";

const menuListData: TSellerMenuItem[] = [
  {
    text: "Личный кабинет",
    icon: <ProfileIcon />,
    path: "",
  },
  {
    text: "Товары магазина",
    icon: <GoodsIcon />,
    path: "",
  },
  {
    text: "Покупатели",
    icon: <BuyersIcon />,
    path: "/buyers",
  },
];

const SellerMenuList: FC = () => (
  <SellerMenuListLayout>
    {menuListData.map((item) => (
      <SellerMenuItem
        key={item.text}
        path={item.path}
        icon={item.icon}
        text={item.text}
      />
    ))}
  </SellerMenuListLayout>
);

export default SellerMenuList;
