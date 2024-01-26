import React, { FC, useMemo } from "react";
import { useParams } from "react-router-dom";

import { useAppSelector } from "@/hooks/redux";

import { UpdateUserForm } from "@/components/update-user/UpdateUserForm";
import { UserInfo } from "@/components/buyers-page/UserInfo";
import { SellerLayout } from "@/layouts/SellerLayout";
import { PageLayout } from "@/layouts/PageLayout";

import { UpdateUserLayout, UserTitle } from "./styles";

const UpdateUser: FC = () => {
  const users = useAppSelector((state) => state.users.users);
  const { id } = useParams();

  const index = useMemo(() => {
    return Number(id) - 1;
  }, [id]);

  return (
    <PageLayout>
      <SellerLayout>
        <UpdateUserLayout>
          <UserTitle>{users[index].username}</UserTitle>
          <UserInfo {...users[index]} />
          <UpdateUserForm />
        </UpdateUserLayout>
      </SellerLayout>
    </PageLayout>
  );
};

export default UpdateUser;
