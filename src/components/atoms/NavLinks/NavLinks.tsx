import React, { useContext } from "react";
import { Link } from "react-router-dom";
import {
  BigMenuWrapper,
  Wrapper,
  FirstBlockMenu,
  SecondBlockMenu,
  ThirdBlockMenu,
} from "./NavLinks.styles";
import { NavigationContext } from "../../../context/NavigationContext";

const NavLinks = () => {
  const { closeNavbar } = useContext(NavigationContext);

  return (
    <BigMenuWrapper>
      <Wrapper>
        <FirstBlockMenu>
          <Link to="/" onClick={closeNavbar}>
            Home
          </Link>
          <Link to="/mywork" onClick={closeNavbar}>
            My Works
          </Link>
          <Link to="/myresume" onClick={closeNavbar}>
            My Resume
          </Link>
        </FirstBlockMenu>
        <SecondBlockMenu>
          <h3>SAY HELLO</h3>
          <a href="mailto:tomek.sproch@gmail.com">tomek.sproch@gmail.com</a>
          <a
            href="https://wa.me/888696986"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </SecondBlockMenu>
        <ThirdBlockMenu>
          <a href="/">TW</a>
          <a
            href="https://github.com/tomeksproch"
            target="_blank"
            rel="noopener noreferrer"
          >
            GH
          </a>
          <a href="/">ING</a>
          <a
            href="https://www.linkedin.com/in/tomasz-sproch-10a6b11a1/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LN
          </a>
        </ThirdBlockMenu>
      </Wrapper>
    </BigMenuWrapper>
  );
};

export default NavLinks;
