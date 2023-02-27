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
  padding: 2rem 2.5rem 2.5rem 2.5rem;
  width: 100%;
  background-color: ${({ open, theme }) =>
    open ? theme.colors.initialColor : "transparent"};

  @media ${QUERIES.bigDevicesAndUp} {
    padding: 4rem 10rem 2.5rem 10rem;
    position: fixed;
    background-color: transparent;
  }
`;
