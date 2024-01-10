import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";
import SVG from "react-inlinesvg";

interface SVGProps {
  
}

export const HeroContentWrapper = styled.div`
width: 100%;

@media ${QUERIES.tabletAndUp}{
    position: relative;
    background-image: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.pastelTeal}  67%, ${theme.colors.pastelWhite} 33%);`};
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
}

`;


export const BubleClipartSecond = styled(SVG)<SVGProps>`
display: none;

@media ${QUERIES.laptopAndUp}{
    display: flex;
    position: absolute;
    stroke: ${({ theme }) => theme.colors.pastelTeal};
    right: -800px;
    top: -500px;
    z-index: 0;
    width: 1000px;
    transform: rotate(90deg);
    stroke-width: 5px;

  }
`


export const HeroContentStyles = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction:column;


@media ${QUERIES.tabletAndUp}{
    flex-direction:row;
    justify-content: space-between;
    gap: 1rem;
    padding: 10rem 5rem;
}

@media ${QUERIES.laptopAndUp}{}

@media ${QUERIES.desktopAndUp}{
    padding: 11rem;
}

@media ${QUERIES.bigDevicesAndUp}{
    padding: 18rem 0;
    max-width: 1500px;
}
`

