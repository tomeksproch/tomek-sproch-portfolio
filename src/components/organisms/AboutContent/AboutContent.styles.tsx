import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const Wrapper = styled.div`
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  @media ${QUERIES.tabletAndUp}{
    padding: 6rem 5rem;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    height: 100vh;
    align-items: center;
    gap: 10rem;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
  }
`;

export const AboutArticle = styled.article`
  @media ${QUERIES.laptopAndUp} {
    padding-bottom: 10rem;
  }
`;

export const SkillsArticle = styled.article`
  padding-top: 4rem;
  @media ${QUERIES.laptopAndUp} {
    padding-top: 10rem;
  }
`;
