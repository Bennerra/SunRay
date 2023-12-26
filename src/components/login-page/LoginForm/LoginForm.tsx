import React, { FC } from "react";

import { HeaderForm } from "../HeaderForm";
import { SiteContainer } from "../../../styles/components";
import { FormLoginLayout, FormTitle } from "./styles";

const LoginForm: FC = () => {
  return (
    <>
      <HeaderForm />
      <SiteContainer>
        <FormLoginLayout>
          <FormTitle color="#353535" variant="h1">
            Присоединяйся к SunRay!
          </FormTitle>
        </FormLoginLayout>
      </SiteContainer>
    </>
  );
};

export default LoginForm;
