import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const StyledMainTittle = styled.h1`
  color: ${({ theme }) => theme.colors.darkGrey};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  line-height: 1em;
  padding-top: 3rem;
  overflow-wrap: inherit;
  max-width: 7em;

  @media ${QUERIES.bigDevicesAndUp} {
    font-size: ${({ theme }) => theme.fontSize.desktop};
  }
`;
