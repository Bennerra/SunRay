import React, { FC, ReactNode } from "react";
import { SellerContentLayout } from "../SellerContentLayout";
import { SellerMenu } from "@/components/common/SellerMenu";

interface ISellerLayoutProps {
  children: ReactNode;
}

const SellerLayout: FC<ISellerLayoutProps> = ({ children }) => (
  <SellerContentLayout>
    <SellerMenu />
    {children}
  </SellerContentLayout>
);

export default SellerLayout;
