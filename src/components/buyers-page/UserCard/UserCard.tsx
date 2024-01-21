import React, { FC } from "react";

import { TBuyerData } from "@/models/LoginFormData";
import { UserInfo } from "../UserInfo";

import { SmallButton } from "@/styles/components";
import { UserButtonList, UserCardLayout, UserName } from "./styles";

const UserCard: FC<TBuyerData> = ({ ...props }) => {
  return (
    <UserCardLayout>
      <UserName>{props.username}</UserName>
      <UserInfo {...props} />
      <UserButtonList>
        <SmallButton variant="contained" color="primary">
          Изменить
        </SmallButton>
        <SmallButton variant="contained" color="primary">
          Удалить
        </SmallButton>
      </UserButtonList>
    </UserCardLayout>
  );
};

export default UserCard;
