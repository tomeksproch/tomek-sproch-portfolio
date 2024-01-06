import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

interface Props {
  open: boolean;
}

export const MainNav = styled.nav<Props>`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem;
  width: 100%;
  background-color: ${({ open, theme }) =>
    open ? theme.colors.initialColor : "transparent"};
    z-index: 10;

  @media ${QUERIES.tabletAndUp} {
    padding: 2rem 2rem;
    position: fixed;
    background-color: transparent;
  }
`;
