import React, { FC, memo } from "react";

import { TBuyerData } from "@/models/LoginFormData";

import { UserCard } from "../UserCard";

import { CardsListLayout } from "./styles";
import { MessageText } from "@/styles/components";

interface ICardListProps {
  users: TBuyerData[];
  error: string;
  cardsQuery: string;
}

const BuyersCardList: FC<ICardListProps> = memo(
  ({ users, error, cardsQuery }) => {
    return (
      <CardsListLayout>
        {users
          .filter((card) => card.username.includes(cardsQuery.toLowerCase()))
          .map((user) => (
            <UserCard key={user.username} {...user} />
          ))}
        {error && <MessageText>Что-то пошло не так :(</MessageText>}
      </CardsListLayout>
    );
  }
);

export default BuyersCardList;
