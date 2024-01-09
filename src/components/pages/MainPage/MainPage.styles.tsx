import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";


export const MainPageWrapper = styled.div`
height: 100vh;

@media ${QUERIES.laptopAndUp}{
  scroll-snap-type:  y proximity;
  overflow-y: scroll;
}
`;


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

  @media ${QUERIES.laptopAndUp}{
  scroll-snap-align: start;
}

`;

export const MainPageSecondSectiion = styled.div`
@media ${QUERIES.laptopAndUp}{
  scroll-snap-align: start;
}
`

export const MainPageThirdSectiion = styled.div`
@media ${QUERIES.laptopAndUp}{
  scroll-snap-align: start;
}
`

export const MainPageFourthSectiion = styled.div`
@media ${QUERIES.laptopAndUp}{
  scroll-snap-align: start;
}
`