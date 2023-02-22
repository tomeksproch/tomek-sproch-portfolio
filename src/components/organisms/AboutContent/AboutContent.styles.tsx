import styled from "styled-components";

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
`;

export const AboutArticle = styled.article``;

export const SkillsArticle = styled.article`
  padding-top: 4rem;
`;
