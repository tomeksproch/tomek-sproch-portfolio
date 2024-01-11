import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";
import SVG from "react-inlinesvg";

interface SVGProps {
}

export const FooterWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  justify-content: center;

  @media ${QUERIES.tabletAndUp}{
    padding: 10rem 0;
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

  @media ${QUERIES.tabletAndUp}{
    gap: 8rem;
    
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
  font-size: ${({theme})=> theme.fontSize.l};
`;



export const NavigationAndContactWrapper = styled.div`
display: flex;
flex-direction: column;
gap: 3rem;

a{
  white-space: nowrap;
}


 @media ${QUERIES.tabletAndUp}{
  max-width: 70%;
  flex-direction: row;
  gap: 1.5rem;
  justify-content: space-between;
  align-items: center;
    
  }

  @media ${QUERIES.laptopAndUp}{
    max-width: 50%;
  }

`

export const LineAndOthersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const FooterSocialIconsWrapper = styled.div`
display: none;

@media ${QUERIES.tabletAndUp}{
  display: flex;
justify-content: space-between;
gap: 1.5rem;
align-items: center;
    
  }
`


export const FooterSocialAndCreatorWrapper = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
`

export const FooterInstaIcon = styled(SVG)<SVGProps>`
stroke: ${({ theme }) => theme.colors.lightGrey};
`

export const FooterGithubIcon = styled(SVG)<SVGProps>`
stroke: ${({ theme }) => theme.colors.lightGrey};
`

export const FooterLinkedinIcon = styled(SVG)<SVGProps>`
stroke: ${({ theme }) => theme.colors.lightGrey};
`