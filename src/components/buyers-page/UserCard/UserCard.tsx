import React, { FC } from "react";
import { TBuyerLoginFormData } from "@/models/LoginFormData";

import { UserButtonList, UserCardLayout, UserName } from "./styles";
import { SmallButton } from "@/styles/components";
import { UserInfo } from "../UserInfo";

const UserCard: FC<TBuyerLoginFormData> = ({ ...props }) => {
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
