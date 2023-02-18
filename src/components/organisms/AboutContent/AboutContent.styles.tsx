import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5rem 2.5rem 5rem 2.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.m};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const AboutArticle = styled.article`
  color: ${({ theme }) => theme.colors.lightTeal};

  h2 {
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;

export const SkillsArticle = styled.article`
  color: ${({ theme }) => theme.colors.lightTeal};
  padding-top: 4rem;

  h2 {
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;
