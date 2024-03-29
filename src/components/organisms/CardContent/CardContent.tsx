import React from "react";
import Card from "../../molecules/Card/Card";
import { CardContentWrapper, CardContentStyles } from "./CardContent.styles";

const CardContent = () => {
  return (
    <CardContentWrapper>
    <CardContentStyles>
      <Card
        tittle="Look at my projects!"
        text="My projects: web apps and experimental stuff."
        buttonTittle="See my projects!"
        path="/myprojects"
        />
      <Card
        tittle="My Resume"
        text="Take a look to my resume. You can also download it."
        buttonTittle="See my resume!"
        path="/myresume"
        />
      </CardContentStyles>
    </CardContentWrapper>
  );
};

export default CardContent;
