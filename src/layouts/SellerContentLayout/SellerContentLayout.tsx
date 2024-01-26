import React, { FC, ReactNode } from "react";

import { ContentLayout } from "./styles";

interface ISellerContentLayoutProps {
  children: ReactNode;
}

const SellerContentLayout: FC<ISellerContentLayoutProps> = ({ children }) => (
  <ContentLayout>{children}</ContentLayout>
);

export default SellerContentLayout;
