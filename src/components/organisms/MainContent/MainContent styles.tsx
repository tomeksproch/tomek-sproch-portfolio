import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const MainContentArticle = styled.article`
  background-color: ${({ theme }) => theme.colors.pastelTeal};
  padding: 7rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

 

  @media ${QUERIES.tabletAndUp} {
    background-color: transparent;
    padding: 0;
  }

 
`;
