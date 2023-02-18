import { useContext } from "react";
import { Slant as Hamburger } from "hamburger-react";
import { Burger } from "./HamburgerButton.styles";
import { NavigationContext } from "../../../context/NavigationContext";

const HamburgerButton = () => {
  const { open, toggleNavbar } = useContext(NavigationContext);

  return (
    <Burger>
      <Hamburger
        onToggle={toggleNavbar}
        color={open ? "var(--main-color-dark)" : "white"}
        hideOutline={false}
        easing="ease-in"
        toggled={open}
      />
    </Burger>
  );
};

export default HamburgerButton;
