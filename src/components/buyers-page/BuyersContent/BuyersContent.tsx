import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUsers } from "@/store/usersSlice";

import { Loader } from "@/components/common/Loader";
import { BuyersCardList } from "../BuyersCardList";
import { SellerLayout } from "@/layouts/SellerLayout";

const BuyersContent: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const error = useAppSelector((state) => state.users.error);
  const isLoading = useAppSelector((state) => state.users.isLoading);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <SellerLayout>
      {isLoading ? <Loader /> : <BuyersCardList users={users} error={error} />}
    </SellerLayout>
  );
};

export default BuyersContent;
