import styled from "styled-components";
import SVG from "react-inlinesvg";

interface SVGProps {
  
}

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-decoration: none;
  padding-top: 6rem;
  font-size: ${({ theme }) => theme.fontSize.l};

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;

export const InstaIcon = styled(SVG)<SVGProps>`
stroke: ${({ theme }) => theme.colors.darkGrey};
`

export const GithubIcon = styled(SVG)<SVGProps>`
stroke: ${({ theme }) => theme.colors.darkGrey};
`

export const LinkedinIcon = styled(SVG)<SVGProps>`
stroke: ${({ theme }) => theme.colors.darkGrey};
`
