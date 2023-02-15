import { createContext, useState } from "react";

type Navigation = {
  open: boolean;
  toggleNavbar?: () => void;
  closeNavbar?: () => void;
};

const defaultNavigation: Navigation = {
  open: false,
};

export const NavigationContext = createContext<Navigation>(defaultNavigation);

const NavigationProvider = ({ children }: any) => {
  const [open, setOpen] = useState(false);

  const toggleNavbar = () => {
    setOpen(!open);
  };

  const closeNavbar = () => {
    setOpen(false);
  };

  return (
    <NavigationContext.Provider value={{ open, toggleNavbar, closeNavbar }}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationProvider;
