import React from "react";
import ContactMeLinks from "../../atoms/ContactMeLinks/ContactMeLinks";
import NavigationLinks from "../../atoms/NavigationLinks/NavigationLinks";
import {
  CreatorText,
  Line,
  StyledFooterContent,
  FooterWrapper,
} from "./FooterContent.styles";

const FooterContent = () => {
  return (
    <FooterWrapper>
      <StyledFooterContent>
        <ContactMeLinks />
        <NavigationLinks />
        <Line />
        <CreatorText>© Tomasz Sproch 2023</CreatorText>
      </StyledFooterContent>
    </FooterWrapper>
  );
};

export default FooterContent;
