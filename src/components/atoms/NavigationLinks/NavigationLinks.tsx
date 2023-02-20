import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { NavigationContext } from "../../../context/NavigationContext";
import { StyledNavigationLinks } from "./NavigationLinks.styles";

const NavigationLinks = () => {
  const { closeNavbar } = useContext(NavigationContext);
  return (
    <StyledNavigationLinks>
      {" "}
      <Link to="/" onClick={closeNavbar}>
        Home
      </Link>
      <Link to="/myprojects" onClick={closeNavbar}>
        My Projects
      </Link>
      <Link to="/myresume" onClick={closeNavbar}>
        My Resume
      </Link>
    </StyledNavigationLinks>
  );
};

export default NavigationLinks;
