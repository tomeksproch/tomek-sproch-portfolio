import React, { useEffect, useContext } from "react";
import Logo from "../../atoms/Logo/Logo";
import HamburgerButton from "../../atoms/HamburgerButton/HamburgerButton";
import NavLinks from "../../atoms/NavLinks/NavLinks";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { MainNav } from "./Navbar.styles";
import { NavigationContext } from "../../../context/NavigationContext";

const Navbar = () => {
  const { open } = useContext(NavigationContext);

  useEffect(() => {
    open ? disableBodyScroll(document.body) : enableBodyScroll(document.body);
  }, [open]);

  return (
    <MainNav open={!!open}>
      <Logo />
      <HamburgerButton />
      {open && <NavLinks />}
    </MainNav>
  );
};

export default Navbar;
