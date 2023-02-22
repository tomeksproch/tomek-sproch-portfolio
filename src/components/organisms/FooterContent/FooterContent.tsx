import React from "react";
import ContactMeLinks from "../../atoms/ContactMeLinks/ContactMeLinks";
import NavigationLinks from "../../atoms/NavigationLinks/NavigationLinks";
import { CreatorText, Line, StyledFooterContent } from "./FooterContent.styles";

const FooterContent = () => {
  return (
    <StyledFooterContent>
      <ContactMeLinks />
      <NavigationLinks />
      <Line />
      <CreatorText>© Tomasz Sproch 2023</CreatorText>
    </StyledFooterContent>
  );
};

export default FooterContent;
