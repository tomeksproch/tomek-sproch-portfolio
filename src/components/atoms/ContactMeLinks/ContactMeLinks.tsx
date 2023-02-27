import React from "react";
import { StyledContactMeLinks } from "./ContactMeLinks.styles";

const ContactMeLinks = () => {
  return (
    <StyledContactMeLinks>
      <h3>CONTACT ME</h3>
      <a href="mailto:hello@sproch.dev">hello@sproch.dev</a>
      <a
        href="https://wa.me/48888696986"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </StyledContactMeLinks>
  );
};

export default ContactMeLinks;
