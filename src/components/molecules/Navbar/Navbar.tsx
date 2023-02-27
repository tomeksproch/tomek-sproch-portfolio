import React, { useEffect, useContext, useState } from "react";
import Logo from "../../atoms/Logo/Logo";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";
import MenuLinks from "../MenuLinks/MenuLinks";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { MainNav } from "./Navbar.styles";
import { NavigationContext } from "../../../context/NavigationContext";

const Navbar = () => {
  const { open } = useContext(NavigationContext);
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  useEffect(() => {
    setWindowSize(window.innerWidth);

    if (windowSize < 500 && open) {
      disableBodyScroll(document.body);
    } else {
      enableBodyScroll(document.body);
    }
  }, [open, windowSize]);

  return (
    <MainNav open={!!open}>
      <Logo />
      <HamburgerButton />
      {open && <MenuLinks />}
    </MainNav>
  );
};

export default Navbar;
