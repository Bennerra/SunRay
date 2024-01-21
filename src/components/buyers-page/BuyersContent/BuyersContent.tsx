import React, { FC, useEffect } from "react";

import { SellerMenu } from "@/components/common/SellerMenu";
import { SellerContentLayout } from "@/layouts/SellerContentLayout";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUsers } from "@/store/usersSlice";
import { UserCard } from "../UserCard";
import { CardsList } from "./styles";
import { Loader } from "../../common/Loader";

import { MessageText } from "@/styles/components";

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
        </CardsList>
      )}
      {error && <MessageText>Что-то пошло не так :(</MessageText>}
    </SellerContentLayout>
  );
};

export default BuyersContent;
