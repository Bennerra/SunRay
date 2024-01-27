import React, { FC, memo } from "react";

import { TGetSingleUser } from "@/models/TGetSingleUser";

import { UserCard } from "../UserCard";

import { CardsListLayout } from "./styles";
import { MessageText } from "@/styles/components";

interface ICardListProps {
  users: TGetSingleUser[];
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
