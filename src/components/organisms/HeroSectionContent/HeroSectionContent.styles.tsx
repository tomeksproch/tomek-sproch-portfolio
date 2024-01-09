import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const HeroContentWrapper = styled.div`
width: 100%;

@media ${QUERIES.tabletAndUp}{
    background-image: ${({ theme }) => `linear-gradient(90deg, ${theme.colors.pastelTeal}  67%, ${theme.colors.pastelWhite} 33%);`};
    display: flex;
    align-items: center;
    justify-content: center;
}

`;


export const HeroContentStyles = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

@media ${QUERIES.tabletAndUp}{
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

