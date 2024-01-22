import React, { FC } from "react";

import { LayoutMenuItem } from "./styles";
import { TSellerMenuItem } from "@/models/TSellerMenuItem";

const SellerMenuItem: FC<TSellerMenuItem> = ({ icon, text }) => (
  <LayoutMenuItem>
    {icon}
    {text}
  </LayoutMenuItem>
);

export default SellerMenuItem;
