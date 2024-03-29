import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

interface Props {
  open: boolean;
}

export const ImageWrapper = styled.div`
  padding: 6rem 4rem;
  background-color: ${({ theme }) => theme.colors.pastelWhite};
  position: relative;

@media ${QUERIES.tabletAndUp} {
    background-color: transparent;
    padding: 0;
  }
`;

export const ImageStyles = styled.img<Props>`
z-index: 1;
@media ${QUERIES.tabletAndUp} {
    height: 100%;
    width: 100%;
    min-width: 14rem;
    max-width: 20rem;
  }

  @media ${QUERIES.laptopAndUp} {
    margin-right: 10rem;
  }

  @media ${QUERIES.desktopAndUp} {
    margin-right: 14rem;
    max-width: 25rem;
  }


`;

