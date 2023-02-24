import React, { useContext } from "react";
import { StyledSVG } from "./Logo.styles";
import { NavigationContext } from "../../../context/NavigationContext";
import sprochFullLogo from "../../../assets/logo/sproch-full-logo.svg";
import { useNavigate } from "react-router";

const Logo = () => {
  const { open } = useContext(NavigationContext);
  const navigate = useNavigate();

  const navigateHandler = () => {
    navigate("/");
  };

  return (
    <>
      <StyledSVG src={sprochFullLogo} open={open} onClick={navigateHandler} />
    </>
  );
};

export default Logo;
