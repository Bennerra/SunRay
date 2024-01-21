import React, { FC } from "react";

import { Header } from "@/components/common/Header";

import { SiteContainer } from "@/styles/components";
import { BuyersContent } from "@/components/buyers-page/BuyersContent";

const Buyers: FC = () => (
  <main>
    <Header />
    <SiteContainer>
      <BuyersContent />
    </SiteContainer>
  </main>
);

export default Buyers;
