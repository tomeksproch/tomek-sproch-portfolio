import React from "react";
import { StyledSocialLinks, InstaIcon, GithubIcon, LinkedinIcon } from "./SocialLinks.styles";
import instaIcon from '../../../assets/icons/instagram.svg';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';

const SocialLinks = () => {
  return (
    <StyledSocialLinks>
      <a
        href="https://github.com/tomeksproch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GithubIcon src={githubIcon}/>
      </a>
      <a href="https://www.instagram.com/tomeksproch/"  
        target="_blank"
        rel="noopener noreferrer">
          <InstaIcon src={instaIcon}/>
      </a>
      <a
        href="https://www.linkedin.com/in/tomasz-sproch-10a6b11a1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <LinkedinIcon src={linkedinIcon}/>
      </a>
    </StyledSocialLinks>
  );
};

export default SocialLinks;
