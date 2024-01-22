import React, { FC, memo } from "react";

import { TBuyerData } from "@/models/LoginFormData";

import { UserCard } from "../UserCard";

import { CardsListLayout } from "./styles";
import { MessageText } from "@/styles/components";

interface ICardListProps {
  users: TBuyerData[];
  error: string;
}

const BuyersCardList: FC<ICardListProps> = memo(({ users, error }) => (
  <CardsListLayout>
    {users.map((user) => (
      <UserCard key={user.username} {...user} />
    ))}
    {error && <MessageText>Что-то пошло не так :(</MessageText>}
  </CardsListLayout>
));

export default BuyersCardList;
