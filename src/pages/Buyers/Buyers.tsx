import React, { FC } from "react";
import { Header } from "@/components/common/Header";
import { SiteContainer } from "../../styles/components";
import SellerMenu from "../../components/common/SellerMenu/SellerMenu";
import { UserCard } from "../../components/buyers-page/UserCard";
import { useAppSelector } from "../../hooks/redux";

const Buyers: FC = () => {
  const user = useAppSelector((state) => state.user.buyer);

  return (
    <main>
      <Header />
      <SiteContainer>
        <SellerMenu />
        <UserCard {...user} />
      </SiteContainer>
    </main>
  );
};

export default Buyers;
