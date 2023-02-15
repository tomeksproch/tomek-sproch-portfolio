import React, { useContext } from "react";
import { LogoWrapper, FirstEl, SecondEl } from "./Logo.styles";
import { NavigationContext } from "../../../context/NavigationContext";

const Logo = () => {
  const { open } = useContext(NavigationContext);
  return (
    <LogoWrapper open={open}>
      <FirstEl>tomasz</FirstEl>
      <SecondEl>SPROCH</SecondEl>
    </LogoWrapper>
  );
};

export default Logo;
