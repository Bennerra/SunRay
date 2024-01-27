import React, { FC, memo } from "react";
import { Link } from "react-router-dom";

import { TGetSingleUser } from "@/models/TGetSingleUser";

import { UserInfo } from "@/components/common/UserInfo";

import { SmallButton } from "@/styles/components";
import { UserButtonList, UserCardLayout, UserName } from "./styles";

const UserCard: FC<TGetSingleUser> = memo(({ ...props }) => (
  <UserCardLayout>
    <UserName>{props.username}</UserName>
    <UserInfo {...props} />
    <UserButtonList>
      <Link to={`/buyers/user/${props.id}`}>
        <SmallButton variant="contained" color="primary">
          Изменить
        </SmallButton>
      </Link>
      <SmallButton variant="contained" color="primary">
        Удалить
      </SmallButton>
    </UserButtonList>
  </UserCardLayout>
));

export default UserCard;
