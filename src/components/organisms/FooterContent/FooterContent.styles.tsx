import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  
  display: flex;
  justify-content: center;

  @media ${QUERIES.tabletAndUp}{
    padding: 5rem 0;
  }
`;

export const StyledFooterContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 4rem;
  color: ${({ theme }) => theme.colors.pastelWhite};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  h3 {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    opacity: 30%;
  }

  @media ${QUERIES.desktopAndUp}{
    padding: 0rem 11rem;
    
  }

  @media ${QUERIES.bigDevicesAndUp}{
    padding: 0;
    max-width: 1500px;
  }
 
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 1px;
  position: relative;
`;

export const CreatorText = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  position: relative;
  top: -3rem;
`;
