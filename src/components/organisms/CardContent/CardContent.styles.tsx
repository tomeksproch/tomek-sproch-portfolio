import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const CardContentWrapper = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.pastelWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 3;
  
@media ${QUERIES.laptopAndUp} {
    height: 100vh;
  }

`

export const CardContentStyles = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 6rem 2rem;
  z-index: 3;

  @media ${QUERIES.tabletAndUp}{
    flex-direction: row;
  }

  @media ${QUERIES.desktopAndUp}{
    padding: 0rem 11rem;
  }

  @media ${QUERIES.bigDevicesAndUp} {
    max-width: 1500px;
    padding: 0;
  }
  
`;
