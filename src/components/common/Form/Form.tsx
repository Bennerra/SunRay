import React, { FC } from "react";

const Form: FC = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export default Form;
