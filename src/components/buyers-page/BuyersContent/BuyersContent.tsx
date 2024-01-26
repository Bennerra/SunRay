import React, { FC, useEffect, useState } from "react";
import { useForm } from "react-hook-form";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUsers } from "@/store/usersSlice";
import { TFilter } from "./types";

import { Loader } from "@/components/common/Loader";
import { BuyersCardList } from "../BuyersCardList";
import { SellerLayout } from "@/layouts/SellerLayout";
import { FormLoginField } from "@/components/login-page/FormField/styles";

import { BuyersContentLayout } from "./styles";
import { MainForm } from "@/styles/mainForm";

const BuyersContent: FC = () => {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.users.users);
  const error = useAppSelector((state) => state.users.error);
  const isLoading = useAppSelector((state) => state.users.isLoading);
  const [cardsQuery, setCardsQuery] = useState("");
  const searchParams = new URLSearchParams(window.location.search);

  const { register, watch } = useForm<TFilter>();

  useEffect(() => {
    searchParams.set("username", watch("username"));
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.replaceState({}, "", newUrl);
    setCardsQuery(searchParams.get("username") || "");
  }, [watch("username")]);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return (
    <SellerLayout>
      <BuyersContentLayout>
        <MainForm>
          <FormLoginField
            {...register("username")}
            type="search"
            variant="outlined"
            label="Поиск"
          />
        </MainForm>
        {isLoading ? (
          <Loader />
        ) : (
          <BuyersCardList cardsQuery={cardsQuery} users={users} error={error} />
        )}
      </BuyersContentLayout>
    </SellerLayout>
  );
};

export default BuyersContent;
