import React from "react";
import AboutText from "../../atoms/AboutText/AboutText";
import SectionsTittle from "../../atoms/SectionsTittle/SectionsTittle";
import SkillsText from "../../atoms/SkillsText/SkillsText";
import { Wrapper, AboutArticle, SkillsArticle } from "./AboutContent.styles";

const AboutContent = () => {
  return (
    <Wrapper>
      <AboutArticle>
        <SectionsTittle children="WHO AM I?" />
        <AboutText />
      </AboutArticle>
      <SkillsArticle>
        <SectionsTittle children="MY SKILLS" />
        <SkillsText />
      </SkillsArticle>
    </Wrapper>
  );
};

export default AboutContent;
