import React, { FC } from "react";
import { Link } from "react-router-dom";

import { useResize } from "@/hooks/useResize";

import Logo from "@/assets/logo.svg";
import LogoMobile from "@/assets/logo-mobile.svg";

import {
  MiddleButton,
  HeaderContainer,
  SiteContainer,
} from "@/styles/components";
import { HeaderLayout } from "./styles";

const Header: FC = () => {
  const { width } = useResize();

  return (
    <HeaderLayout>
      <SiteContainer>
        <HeaderContainer>
          <Link to="/">{width > 768 ? <Logo /> : <LogoMobile />}</Link>
          <MiddleButton variant="contained" color="primary">
            Главная
          </MiddleButton>
        </HeaderContainer>
      </SiteContainer>
    </HeaderLayout>
  );
};

export default Header;
