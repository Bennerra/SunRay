import React, { FC } from "react";

import { SmallButton, HeaderContainer } from "../../../styles/components";
import { HeaderLayout } from "./styles";

import Logo from "../../../assets/logo.svg";

const HeaderForm: FC = () => (
  <HeaderLayout>
    <HeaderContainer>
      <Logo />
      <SmallButton variant="contained" color="primary">
        Главная
      </SmallButton>
    </HeaderContainer>
  </HeaderLayout>
);

export default HeaderForm;
