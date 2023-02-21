import styled from "styled-components";

export const MainContentArticle = styled.article`
  background-color: ${({ theme }) => theme.colors.pastelTeal};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 8rem 2.5rem 2.5rem 2.5rem;
`;
