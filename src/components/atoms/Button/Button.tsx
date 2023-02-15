import React from "react";
import { StyledButton } from "./Button.styles";

const Button = ({ children }: any) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
