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
        hideOutline={false}
        easing="ease-in"
        toggled={open}
      />
    </Burger>
  );
};

export default HamburgerButton;
