import styled from "styled-components";
import SVG from "react-inlinesvg";

interface SVGProps {
  open: boolean;
}

export const StyledSVG = styled(SVG)<SVGProps>`
  height: 2.1rem;
  width: auto;
  & path {
    fill: ${({ theme }) => theme.colors.darkGrey};
  }
`;
