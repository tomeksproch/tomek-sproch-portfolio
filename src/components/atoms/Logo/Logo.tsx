import React, { useContext } from "react";
import { StyledSVG } from "./Logo.styles";
import { NavigationContext } from "../../../context/NavigationContext";
import sprochFullLogo from "../../../assets/logo/sproch-full-logo.svg";

const Logo = () => {
  const { open } = useContext(NavigationContext);

  return (
    <>
      <StyledSVG src={sprochFullLogo} open={open} />
    </>
  );
};

export default Logo;
