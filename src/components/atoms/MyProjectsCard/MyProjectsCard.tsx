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
      <ProjectsLink
        href={props.href1}
        target="_blank"
        rel="noopener noreferrer"
      >
        Demo! 👈🏻
      </ProjectsLink>
      <ProjectsLink
        href={props.href2}
        target="_blank"
        rel="noopener noreferrer"
      >
        Code on GitHub! 👈🏻
      </ProjectsLink>
    </MyProjectsCardWrapper>
  );
};

export default MyProjectsCard;
