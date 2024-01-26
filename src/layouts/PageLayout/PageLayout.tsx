import React, { FC, ReactNode } from "react";
import { SiteContainer } from "@/styles/components";

interface IPageLayoutProps {
  children: ReactNode;
}

const PageLayout: FC<IPageLayoutProps> = ({ children }) => {
  return (
    <main>
      <SiteContainer>{children}</SiteContainer>
    </main>
  );
};

export default PageLayout;
