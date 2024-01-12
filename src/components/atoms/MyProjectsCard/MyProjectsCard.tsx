import React from "react";
import {
  MyProjectsCardWrapper,
  ProjectsImage,
  ProjectsTittle,
  ProjectsLink,
  CardInfoWrapper,
} from "./MyProjectsCard.styles";

const MyProjectsCard = (props: any) => {
  return (
    <MyProjectsCardWrapper>
        <ProjectsLink
        href={props.href1}
        target="_blank"
        rel="noopener noreferrer"
        >
      <ProjectsImage src={props.src} alt={props.alt} />
      </ProjectsLink>
      <CardInfoWrapper>
      <ProjectsTittle>{props.tittle}</ProjectsTittle>
      <ProjectsLink
        href={props.href1}
        target="_blank"
        rel="noopener noreferrer"
        >
        {props.shortLink}
      </ProjectsLink>
      {props.href2 && ( 
          <ProjectsLink
            href={props.href2}
            target="_blank"
            rel="noopener noreferrer"
          >
            Code on GitHub! 👈🏻
          </ProjectsLink>
        )}
        </CardInfoWrapper>
    </MyProjectsCardWrapper>
  );
};

export default MyProjectsCard;
