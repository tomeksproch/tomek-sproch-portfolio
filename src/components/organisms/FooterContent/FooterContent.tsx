import React from "react";
import ContactMeLinks from "../../atoms/ContactMeLinks/ContactMeLinks";
import NavigationLinks from "../../atoms/NavigationLinks/NavigationLinks";
import { StyledFooterContent } from "./FooterContent.styles";

const FooterContent = () => {
  return (
    <StyledFooterContent>
      <ContactMeLinks />
      <NavigationLinks />
    </StyledFooterContent>
  );
};

export default FooterContent;
