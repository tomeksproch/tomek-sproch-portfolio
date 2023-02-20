import React from "react";
import Button from "../../atoms/Button/Button";
import CardTexts from "../../atoms/CardTexts/CardTexts";
import SectionsTittle from "../../atoms/SectionsTittle/SectionsTittle";
import { CardWrapper } from "./Card.styles";

const Card = (props: any) => {
  return (
    <CardWrapper>
      <SectionsTittle>{props.tittle}</SectionsTittle>
      <CardTexts>{props.text}</CardTexts>
      <Button tittle={props.buttonTittle} path={props.path} />
    </CardWrapper>
  );
};

export default Card;
