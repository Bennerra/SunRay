import React, { FC } from "react";

import { ContentLayout } from "./styles";

interface ISellerContentLayoutProps {
  children: React.ReactNode;
}

const SellerContentLayout: FC<ISellerContentLayoutProps> = ({ children }) => (
  <ContentLayout>{children}</ContentLayout>
);

export default SellerContentLayout;
