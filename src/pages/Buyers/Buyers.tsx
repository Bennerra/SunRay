import React, { FC } from "react";

import { SiteContainer } from "@/styles/components";
import { BuyersContent } from "@/components/buyers-page/BuyersContent";

const Buyers: FC = () => (
  <main>
    <SiteContainer>
      <BuyersContent />
    </SiteContainer>
  </main>
);

export default Buyers;
