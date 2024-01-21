import React, { FC } from "react";

import { SellerMenuList } from "../SellerMenuList";

import { SellerMenuLayout } from "./styles";
import { ExitButton } from "@/styles/components";

const SellerMenu: FC = () => (
  <SellerMenuLayout>
    <SellerMenuList />
    <ExitButton variant="contained" color="primary">
      Выйти
    </ExitButton>
  </SellerMenuLayout>
);

export default SellerMenu;
