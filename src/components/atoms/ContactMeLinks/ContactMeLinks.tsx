import React from "react";
import { StyledContactMeLinks } from "./ContactMeLinks.styles";

const ContactMeLinks = () => {
  return (
    <StyledContactMeLinks>
      <h3>CONTACT ME</h3>
      <a href="mailto:tomek.sproch@gmail.com">tomek.sproch@gmail.com</a>
      <a
        href="https://wa.me/888696986"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp
      </a>
    </StyledContactMeLinks>
  );
};

export default ContactMeLinks;
