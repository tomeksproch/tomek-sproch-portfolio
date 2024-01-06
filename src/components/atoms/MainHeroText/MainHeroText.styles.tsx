import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const MainText = styled.main`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media ${QUERIES.tabletAndUp}{
    max-width: 25rem;
  }


  @media ${QUERIES.laptopAndUp}{
    max-width: 35rem;
  }

`;
