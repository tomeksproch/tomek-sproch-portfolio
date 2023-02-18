import React from "react";
import { StyledSocialLinks } from "./SocialLinks.styles";

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      <a href="/">TW</a>
      <a
        href="https://github.com/tomeksproch"
        target="_blank"
        rel="noopener noreferrer"
      >
        GH
      </a>
      <a href="/">ING</a>
      <a
        href="https://www.linkedin.com/in/tomasz-sproch-10a6b11a1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        LN
      </a>
    </StyledSocialLinks>
  );
};

export default SocialLinks;
