import React from "react";
import { MyProjectsContentWrapper } from "./MyProjectsContent.styles";
import MyProjectsCard from "../../atoms/MyProjectsCard/MyProjectsCard";
import sprochLogoBlack from "../../../assets/images/sprochLogoBlack.svg";
import memeGenerator from "../../../assets/images/memeGenerator.svg";
import productCard from "../../../assets/images/productCard.svg";
import rockPaperScissors from "../../../assets/images/productCard.svg";

const MyProjectsContent = () => {
  return (
    <MyProjectsContentWrapper>
      <MyProjectsCard
        src={sprochLogoBlack}
        tittle="Personal website"
        text="My presonal portfolio page. I used here technologies like: React, TypeScript, Styled Components and Atomic Design."
      />
      <MyProjectsCard
        src={productCard}
        tittle="Frontend Mentor - Product preview card component"
        href="https://sproch-card-component.netlify.app/"
        text="Simple Product Card Component is a challenge from Fronentd Mentor. I used here technologies like: HTML and CSS."
      />

      <MyProjectsCard
        src={memeGenerator}
        tittle="Scrimba - Meme Generator"
        href="https://tomeksproch.github.io/meme-generator/"
        text="Meme Generator is app build with Scrimba course.  I used here technologies like: Javascript, React and Styled Components. "
      />
      <MyProjectsCard
        src={rockPaperScissors}
        tittle="Frontend Mentor - Rock, Paper, Scissors"
        href="https://sproch-rock-paper-scissors.netlify.app/"
        text="Rock, Paper, Scissors  is a challenge from Fronentd Mentor. I used here technologies like: Vanilla Javascript, HTML and CSS"
      />
    </MyProjectsContentWrapper>
  );
};

export default MyProjectsContent;
