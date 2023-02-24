import React from "react";
import {
  MyProjectsCardWrapper,
  ProjectsImage,
  ProjectsTittle,
  ProjectsCaption,
  ProjectsLink,
} from "./MyProjectsCard.styles";

const MyProjectsCard = (props: any) => {
  return (
    <MyProjectsCardWrapper>
      <ProjectsImage src={props.src} alt={props.alt} />
      <ProjectsTittle>{props.tittle}</ProjectsTittle>
      <ProjectsCaption>{props.text}</ProjectsCaption>
      <ProjectsLink href={props.href} target="_blank" rel="noopener noreferrer">
        Look at the code! 👈🏻
      </ProjectsLink>
    </MyProjectsCardWrapper>
  );
};

export default MyProjectsCard;
