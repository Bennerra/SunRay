import React, { FC, useEffect } from "react";
import { useParams } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { fetchUpdateUser } from "@/store/updateUserSlice";

import { UpdateUserForm } from "@/components/update-user/UpdateUserForm";
import { UserInfo } from "@/components/common/UserInfo";
import { SellerLayout } from "@/layouts/SellerLayout";
import { PageLayout } from "@/layouts/PageLayout";

import { UpdateUserLayout, UserTitle } from "./styles";

const UpdateUser: FC = () => {
  const user = useAppSelector((state) => state.updateUser.updateUser);
  const dispatch = useAppDispatch();
  const { id } = useParams();

  const userId = Number(id) | 0;

  useEffect(() => {
    dispatch(fetchUpdateUser(userId));
  }, []);

  return (
    <PageLayout>
      <SellerLayout>
        <UpdateUserLayout>
          <UserTitle>{user.username}</UserTitle>
          <UserInfo {...user} />
          <UpdateUserForm />
        </UpdateUserLayout>
      </SellerLayout>
    </PageLayout>
  );
};

export default UpdateUser;
