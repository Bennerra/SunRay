import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUsers } from "@/store/usersSlice";

import { SellerContentLayout } from "@/layouts/SellerContentLayout";
import { SellerMenu } from "@/components/common/SellerMenu";
import { Loader } from "@/components/common/Loader";
import { BuyersCardList } from "../BuyersCardList";

const BuyersContent: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const error = useAppSelector((state) => state.users.error);
  const isLoading = useAppSelector((state) => state.users.isLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <SellerContentLayout>
      <SellerMenu />
      {isLoading ? <Loader /> : <BuyersCardList users={users} error={error} />}
    </SellerContentLayout>
  );
};

export default BuyersContent;
