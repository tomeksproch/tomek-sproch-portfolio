import React from "react";
import Card from "../../molecules/Card/Card";
import { CardContentStyles } from "./CardContent.styles";

const CardContent = () => {
  return (
    <CardContentStyles>
      <Card
        tittle="Look at my projects!"
        text="My projects: web apps and experimental stuff."
        buttonTittle="See my works!"
      />
      <Card
        tittle="My Resume"
        text="Take a look to my resume. You can also download it."
        buttonTittle="See my resume!"
      />
    </CardContentStyles>
  );
};

export default CardContent;
