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
        alt="Tomasz Sproch logo"
        tittle="Personal website"
        href1="https://sproch.netlify.app/"
        href2="https://github.com/tomeksproch/tomek-sproch-portfolio"
        text="My presonal portfolio page. I used here technologies like: React, TypeScript, Styled Components and Atomic Design."
      />
      <MyProjectsCard
        src={productCard}
        alt="Product Card logo"
        tittle="Frontend Mentor - Product preview card component"
        href1="https://sproch-card-component.netlify.app/"
        href2="https://github.com/tomeksproch/product-preview-card-component"
        text="Simple Product Card Component is a challenge from Fronentd Mentor. I used here technologies like: HTML and CSS."
      />

      <MyProjectsCard
        src={memeGenerator}
        tittle="Scrimba - Meme Generator"
        alt="Meme Generator logo"
        href1="https://tomeksproch.github.io/meme-generator/"
        href2="https://github.com/tomeksproch/meme-generator"
        text="Meme Generator is app build with Scrimba course.  I used here technologies like: Javascript, React and Styled Components. "
      />
      <MyProjectsCard
        src={rockPaperScissors}
        alt="Rock, Paper, Scissors logo"
        tittle="Frontend Mentor - Rock, Paper, Scissors"
        href1="https://sproch-rock-paper-scissors.netlify.app/"
        href2="https://github.com/tomeksproch/rock-paper-scissors"
        text="Rock, Paper, Scissors  is a challenge from Fronentd Mentor. I used here technologies like: Vanilla Javascript, HTML and CSS"
      />
    </MyProjectsContentWrapper>
  );
};

export default MyProjectsContent;
