import styled from 'styled-components';

export const Wrapper = styled.div`
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
  color: ${({ theme }) => theme.colors.darkTeal};
  padding: 5rem 3rem;
`;

export const SkillsArticle = styled.article`
  color: ${({ theme }) => theme.colors.darkTeal};
  padding: 0rem 3rem 4rem;
`;
