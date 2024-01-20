import React, { FC } from "react";

import Logo from "../../../assets/logo.svg";
import LogoMobile from "../../../assets/logo-mobile.svg";

import {
  SmallButton,
  HeaderContainer,
  SiteContainer,
} from "../../../styles/components";
import { HeaderLayout } from "./styles";
import { useResize } from "../../../hooks/useResize";

const Header: FC = () => {
  const { width } = useResize();

  return (
    <HeaderLayout>
      <SiteContainer>
        <HeaderContainer>
          {width > 768 ? <Logo /> : <LogoMobile />}
          <SmallButton variant="contained" color="primary">
            Главная
          </SmallButton>
        </HeaderContainer>
      </SiteContainer>
    </HeaderLayout>
  );
};

export default Header;
