import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const MainPageFirsSectiion = styled.div`
width: 100%;


@media ${QUERIES.tabletAndUp}{
  background-image: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.pastelTeal}  67%, ${theme.colors.pastelWhite} 33%);`};
  padding: 10rem 5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  }

  @media screen and (min-width: 581px) {
  }
`;

export const MainPageWrapper = styled.div`

`;