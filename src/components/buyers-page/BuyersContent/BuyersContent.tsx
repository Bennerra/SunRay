import React, { FC, useEffect } from "react";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUsers } from "@/store/usersSlice";

import { SellerContentLayout } from "@/layouts/SellerContentLayout";
import { SellerMenu } from "@/components/common/SellerMenu";
import { Loader } from "@/components/common/Loader";
import { UserCard } from "../UserCard";

import { MessageText } from "@/styles/components";
import { CardsList } from "./styles";

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
      {isLoading ? (
        <Loader />
      ) : (
        <CardsList>
          {users.map((user) => (
            <UserCard key={user.username} {...user} />
          ))}
          {error && <MessageText>Что-то пошло не так :(</MessageText>}
        </CardsList>
      )}
    </SellerContentLayout>
  );
};

export default BuyersContent;
