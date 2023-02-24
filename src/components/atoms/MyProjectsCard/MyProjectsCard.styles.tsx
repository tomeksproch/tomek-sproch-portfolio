import styled from "styled-components";

export const MyProjectsCardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  width: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 2.5rem;
  text-align: center;
  border-radius: 10px 0px 10px 0px;
  box-shadow: 10px 10px 0px -5px #d9e4dd;
`;

export const ProjectsImage = styled.img`
  width: 100%;
`;

export const ProjectsTittle = styled.h4`
  padding-top: 4rem;
`;

export const ProjectsCaption = styled.p`
  padding-top: 1rem;
`;

export const ProjectsLink = styled.a`
  text-decoration: none;
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.darkGrey};
  padding-top: 2rem;

  :hover {
    font-size: 20.5px;
    cursor: pointer;
  }
`;
