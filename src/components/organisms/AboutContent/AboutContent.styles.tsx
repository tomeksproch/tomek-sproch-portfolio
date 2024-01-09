import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const AboutContentStyles = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Wrapper = styled.div`
  width: 100%;
  padding: 6rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
  }

  @media ${QUERIES.tabletAndUp}{
    padding: 6rem 5rem;
  }

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    height: 70vh;
    align-items: center;
    gap: 10rem;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
  }

  @media ${QUERIES.desktopAndUp}{
    padding: 0rem 11rem;
  }

  @media ${QUERIES.bigDevicesAndUp}{
    padding: 0;
    max-width: 1500px;
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
