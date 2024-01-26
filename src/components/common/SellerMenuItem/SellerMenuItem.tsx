import React, { FC } from "react";

import { LayoutMenuItem } from "./styles";
import { TSellerMenuItem } from "@/models/TSellerMenuItem";
import { Link } from "react-router-dom";

const SellerMenuItem: FC<TSellerMenuItem> = ({ icon, text, path }) => (
  <Link to={path}>
    <LayoutMenuItem>
      {icon}
      {text}
    </LayoutMenuItem>
  </Link>
);

export default SellerMenuItem;
