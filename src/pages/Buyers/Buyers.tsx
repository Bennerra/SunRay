import React, { FC } from "react";

import { BuyersContent } from "@/components/buyers-page/BuyersContent";
import { PageLayout } from "@/layouts/PageLayout";

const Buyers: FC = () => (
  <PageLayout>
    <BuyersContent />
  </PageLayout>
);

export default Buyers;
