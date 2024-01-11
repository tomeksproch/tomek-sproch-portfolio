import React from "react";
import { MyProjectsContentWrapper,MyProjectList } from "./MyProjectsContent.styles";
import MyProjectsCard from "../../atoms/MyProjectsCard/MyProjectsCard";
import sprochLogoBlack from "../../../assets/images/sprochLogoBlack.svg";
import memeGenerator from "../../../assets/images/memeGenerator.svg";
import productCard from "../../../assets/images/productCard.svg";
import rockPaperScissors from "../../../assets/images/productCard.svg";
import kiLogo from "../../../assets/images/ki-new-logo.svg";
import mentoringLogo from "../../../assets/images/mit-logo.svg";
import crimConLogo from "../../../assets/images/crim-con-2023.svg";

const MyProjectsContent = () => {
  return (
    <MyProjectsContentWrapper>
      <MyProjectList>
      <MyProjectsCard
        src={crimConLogo}
        alt="CrimCon Logo"
        tittle="AGH CrimCon2023"
        href1="https://crimcon.fslab.agh.edu.pl/pl/"
        shortLink="crimcon.fslab.agh.edu.pl"
      />
      <MyProjectsCard
        src={mentoringLogo}
        alt="MIT Logo"
        tittle="AGH Mentoring IT"
        href1="https://mentoringit.agh.edu.pl/pl/"
        shortLink="mentoringit.agh.edu.pl"
      />
      <MyProjectsCard
        src={kiLogo}
        alt="Ki logo"
        tittle="AGH University Page"
        href1="https://www.informatyka.agh.edu.pl/pl/"
        shortLink="informatyka.agh.edu.pl"
      />
      <MyProjectsCard
        src={sprochLogoBlack}
        alt="Tomasz Sproch logo"
        tittle="Personal website"
        href1="https://sproch.dev"
        shortLink="sproch.dev"
        href2="https://github.com/tomeksproch/tomek-sproch-portfolio"
      />
      <MyProjectsCard
        src={productCard}
        alt="Product Card logo"
        tittle="Product preview"
        href1="https://sproch-card-component.netlify.app/"
        shortLink="card-component.netlify.app"
        href2="https://github.com/tomeksproch/product-preview-card-component"
      />
      <MyProjectsCard
        src={memeGenerator}
        tittle="Meme Generator"
        alt="Meme Generator logo"
        href1="https://tomeksproch.github.io/meme-generator/"
        shortLink="github.io/meme-generator"
        href2="https://github.com/tomeksproch/meme-generator"
      />
      <MyProjectsCard
        src={rockPaperScissors}
        alt="Rock, Paper, Scissors logo"
        tittle="Rock, Paper, Scissors"
        href1="https://sproch-rock-paper-scissors.netlify.app/"
        shortLink="rock-paper-scissors.netlify.app"
        href2="https://github.com/tomeksproch/rock-paper-scissors"
      />
      </MyProjectList>
    </MyProjectsContentWrapper>
  );
};

export default MyProjectsContent;
