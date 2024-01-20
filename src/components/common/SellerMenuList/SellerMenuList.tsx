import React, { FC } from "react";

import { TSellerMenuItem } from "@/models/TSellerMenuItem";

import ProfileIcon from "@/assets/profile.svg";
import GoodsIcon from "@/assets/goods.svg";
import BuyersIcon from "@/assets/buyers.svg";
import { SellerMenuListLayout } from "./styles";
import { SellerMenuItem } from "../SellerMenuItem";

const menuListData: TSellerMenuItem[] = [
  {
    text: "Личный кабинет",
    icon: <ProfileIcon />,
  },
  {
    text: "Товары магазина",
    icon: <GoodsIcon />,
  },
  {
    text: "Покупатели",
    icon: <BuyersIcon />,
  },
];

const SellerMenuList: FC = () => {
  return (
    <SellerMenuListLayout>
      {menuListData.map((item) => (
        <SellerMenuItem key={item.text} icon={item.icon} text={item.text} />
      ))}
    </SellerMenuListLayout>
  );
};

export default SellerMenuList;
