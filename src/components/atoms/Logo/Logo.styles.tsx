import styled from "styled-components";
import SVG from "react-inlinesvg";
import { QUERIES } from "../../../assets/styles/theme";

interface SVGProps {
  open: boolean;
}

export const StyledSVG = styled(SVG)<SVGProps>`
  height: 2.1rem;
  width: auto;
  cursor: pointer;
  & path {
    fill: ${({ theme }) => theme.colors.darkGrey};
  }

  @media ${QUERIES.bigDevicesAndUp} {
    height: 3rem;
  }
`;
