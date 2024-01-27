import React, { FC } from "react";
import { Link } from "react-router-dom";

import { TSellerMenuItem } from "@/models/TSellerMenuItem";

import { LayoutMenuItem } from "./styles";

const SellerMenuItem: FC<TSellerMenuItem> = ({ icon, text, path }) => (
  <Link to={path}>
    <LayoutMenuItem>
      {icon}
      {text}
    </LayoutMenuItem>
  </Link>
);

export default SellerMenuItem;
