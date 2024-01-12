import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const MyProjectsCardWrapper = styled.li`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 10px 0px 10px 0px;
  box-shadow: 10px 10px 0px -5px #d9e4dd;
  margin-bottom: 1.2rem;

  @media (max-width: 659px) {
    width: 100%;
}

  @media (min-width: 660px) and (max-width: 939px){
    flex-basis: calc((100% - 1em) / 2);
}

@media (min-width: 940px) {
    flex-basis: calc((100% - 2em) / 3);
}

@media ${QUERIES.laptopAndUp}{
  :hover{
    transform: translateY(-8px);
    box-shadow: 10px 10px 0px -5px #f9f9f9;
}
}
`;

export const CardInfoWrapper = styled.div`
height: 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  padding: 2rem 2rem;
`

export const ProjectsImage = styled.img`
padding: 4rem;
  width: 100%;
  height: 50%;
  background-color: ${({ theme }) => theme.colors.initialColor};
`;

export const ProjectsTittle = styled.h4`
font-size: ${({ theme }) => theme.fontSize.l};

`;

export const ProjectsCaption = styled.p`

`;

export const ProjectsLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGrey};

`;
