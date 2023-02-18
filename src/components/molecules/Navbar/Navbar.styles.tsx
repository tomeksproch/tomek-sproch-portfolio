import styled from "styled-components";

interface Props {
  open: boolean;
}

export const MainNav = styled.nav<Props>`
  /* background-color: ${({ theme }) => theme.colors.darkTeal}; */
  background-color: transparent;
  display: inline-flex;
  justify-content: space-around;
  align-items: center;
  position: absolute;
  height: 4rem;
  width: 100%;
  padding: 2rem 1rem 1rem;

  ${({ open }) =>
    open &&
    `
   background-color: white;
  `}
`;
