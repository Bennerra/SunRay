import React, { FC } from "react";
import { Header } from "@/components/common/Header";
import { SiteContainer } from "../../styles/components";
import SellerMenu from "../../components/common/SellerMenu/SellerMenu";

const Buyers: FC = () => {
  return (
    <main>
      <Header />
      <SiteContainer>
        <SellerMenu />
      </SiteContainer>
    </main>
  );
};

export default Buyers;
