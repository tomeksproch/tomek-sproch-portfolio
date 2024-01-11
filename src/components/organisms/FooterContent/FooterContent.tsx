import React from "react";
import ContactMeLinks from "../../atoms/ContactMeLinks/ContactMeLinks";
import NavigationLinks from "../../atoms/NavigationLinks/NavigationLinks";
import {
  CreatorText,
  Line,
  StyledFooterContent,
  FooterWrapper,
  NavigationAndContactWrapper,
  LineAndOthersWrapper,
  FooterSocialIconsWrapper,
  FooterSocialAndCreatorWrapper,
  FooterGithubIcon,
  FooterInstaIcon,
  FooterLinkedinIcon
} from "./FooterContent.styles";
import instaIcon from '../../../assets/icons/instagram.svg';
import githubIcon from '../../../assets/icons/github.svg';
import linkedinIcon from '../../../assets/icons/linkedin.svg';

const FooterContent = () => {
  return (
    <FooterWrapper>
      <StyledFooterContent>
        <NavigationAndContactWrapper>
        <ContactMeLinks/>
        <NavigationLinks />
        </NavigationAndContactWrapper>
        <LineAndOthersWrapper>
        <Line />
        <FooterSocialAndCreatorWrapper>
        <CreatorText>© Tomasz Sproch 2023</CreatorText>
        <FooterSocialIconsWrapper>
        <a
        href="https://github.com/tomeksproch"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterGithubIcon src={githubIcon}/>
      </a>
      <a href="https://www.instagram.com/tomeksproch/"  
        target="_blank"
        rel="noopener noreferrer">
          <FooterInstaIcon src={instaIcon}/>
      </a>
      <a
        href="https://www.linkedin.com/in/tomasz-sproch-10a6b11a1/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FooterLinkedinIcon src={linkedinIcon}/>
      </a>
        </FooterSocialIconsWrapper>
        
        </FooterSocialAndCreatorWrapper>
        </LineAndOthersWrapper>
      </StyledFooterContent>
    </FooterWrapper>
  );
};

export default FooterContent;
