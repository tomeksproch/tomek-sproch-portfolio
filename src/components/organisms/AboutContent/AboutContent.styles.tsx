import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const Wrapper = styled.div`
  padding: 5rem 2.5rem 5rem 2.5rem;
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

  @media ${QUERIES.bigDevicesAndUp} {
    flex-direction: row;
    height: 60vh;
    align-items: center;
    gap: 10rem;
    font-size: ${({ theme }) => theme.fontSize.l};

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
  }
`;

export const AboutArticle = styled.article`
  @media ${QUERIES.bigDevicesAndUp} {
    max-width: 700px;
    padding-bottom: 10rem;
  }
`;

export const SkillsArticle = styled.article`
  padding-top: 4rem;
  @media ${QUERIES.bigDevicesAndUp} {
    max-width: 700px;
    padding-top: 10rem;
  }
`;
