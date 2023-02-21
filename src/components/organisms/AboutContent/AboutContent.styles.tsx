import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 5rem 2.5rem 5rem 2.5rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;

export const AboutArticle = styled.article`
  color: ${({ theme }) => theme.colors.darkGrey};

  h2 {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const SkillsArticle = styled.article`
  color: ${({ theme }) => theme.colors.darkGrey};
  padding-top: 4rem;

  h2 {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
