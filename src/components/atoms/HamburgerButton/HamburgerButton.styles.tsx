import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

interface Props {
  open: boolean;
}

export const Burger = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  position: relative;
  z-index: 99999;
color: ${({ theme, open }) =>
    open ? theme.colors.darkGrey : theme.colors.darkGrey};

  @media screen and (min-width: 581px) {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

 
`;
