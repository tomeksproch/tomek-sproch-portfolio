import React from "react";
import AboutText from "../../atoms/AboutText/AboutText";
import SectionsTittle from "../../atoms/SectionsTittle/SectionsTittle";
import SkillsText from "../../atoms/SkillsText/SkillsText";
import { AboutContentStyles, Wrapper, AboutArticle, SkillsArticle, BubleClipart,DotClipart } from "./AboutContent.styles";
import bubleClipartSvg from '../../../assets/images/adds/ts-svg-9.svg'
import dotClipartSvg from '../../../assets/images/adds/ts-svg-2.svg'

const AboutContent = () => {
  return (
    <AboutContentStyles>
    <Wrapper>
      <AboutArticle>
        <SectionsTittle children="Who am I?" />
        <AboutText />
      </AboutArticle>
      <SkillsArticle>
      <DotClipart src={dotClipartSvg} />
        <SectionsTittle children="My skills" />
        <SkillsText />
      </SkillsArticle>
    </Wrapper>
    <BubleClipart src={bubleClipartSvg} />
    </AboutContentStyles>
  );
};

export default AboutContent;
