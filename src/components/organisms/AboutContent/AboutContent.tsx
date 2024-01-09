import React from "react";
import AboutText from "../../atoms/AboutText/AboutText";
import SectionsTittle from "../../atoms/SectionsTittle/SectionsTittle";
import SkillsText from "../../atoms/SkillsText/SkillsText";
import { AboutContentStyles, Wrapper, AboutArticle, SkillsArticle } from "./AboutContent.styles";

const AboutContent = () => {
  return (
    <AboutContentStyles>
    <Wrapper>
      <AboutArticle>
        <SectionsTittle children="Who am I?" />
        <AboutText />
      </AboutArticle>
      <SkillsArticle>
        <SectionsTittle children="My skills" />
        <SkillsText />
      </SkillsArticle>
    </Wrapper>
    </AboutContentStyles>
  );
};

export default AboutContent;
