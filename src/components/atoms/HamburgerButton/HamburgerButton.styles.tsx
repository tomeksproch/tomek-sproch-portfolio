import styled from "styled-components";

interface Props {
  open: boolean;
}

export const Burger = styled.button<Props>`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: ${({ theme, open }) =>
    open ? theme.colors.darkTeal : theme.colors.white};

  @media screen and (min-width: 581px) {
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;
