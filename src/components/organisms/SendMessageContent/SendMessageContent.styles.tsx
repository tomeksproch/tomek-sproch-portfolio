import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";
import SVG from "react-inlinesvg";

interface SVGProps {
  
}

export const SendMeMessageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

export const SendMessageTexts = styled.div`
padding: 6rem 2rem;
z-index: 1;

@media ${QUERIES.tabletAndUp}{
    padding: 6rem 5rem;
  }

 @media ${QUERIES.bigDevicesAndUp} {
    max-width: 1500px;
    padding: 0;
  }
  
`

export const TittleLink =  styled.div`
a{
  text-decoration: none;
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
}
  margin-top: 1.5rem;
`

export const LinkDescription = styled.div`
  font-size: ${({ theme }) => theme.fontSize.l};
  margin-top: 0.5rem;

  a{
    color: ${({ theme }) => theme.colors.contrastLinkColor};
  }
`

export const SeeYouText = styled.div`
  margin-top: 3rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};

`

export const BubleClipart = styled(SVG)<SVGProps>`
display: none;

@media ${QUERIES.laptopAndUp}{
  display: flex;
  position: absolute;
  stroke: ${({ theme }) => theme.colors.initialColor};
  left: -500px;
  top: -300px;
  z-index: 0;
  height: 1500px;
  stroke-width: 4px;
  }
`

export const DotClipart = styled(SVG)<SVGProps>`
display: none;

@media ${QUERIES.laptopAndUp}{
  display: flex;
  position: absolute;
  fill: ${({ theme }) => theme.colors.pastelTeal};
  right:150px;
  top: -40px;
  width: 220px;
  z-index: 0;
  }
`

export const FourDotClipartOne = styled(SVG)<SVGProps>`
display: none;

@media ${QUERIES.laptopAndUp}{
  display: flex;
  position: absolute;
  stroke: ${({ theme }) => theme.colors.pastelTeal};
  right:420px;
  bottom: 220px;
  width: 100px;
  z-index: 0;
  }
`