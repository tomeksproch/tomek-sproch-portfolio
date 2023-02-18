import styled from "styled-components";

export const MainContentArticle = styled.article`
  background-color: ${({ theme }) => theme.colors.darkTeal};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  padding: 8rem 2.5rem 2.5rem 2.5rem;
`;