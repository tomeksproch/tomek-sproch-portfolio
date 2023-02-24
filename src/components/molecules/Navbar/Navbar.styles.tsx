import styled from "styled-components";

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

  /* ${({ open, theme }) =>
    open &&
    `background-color: ${({ theme }: any) => theme.colors.initialColor};`} */
`;
