import styled from "styled-components";

interface Props {
  open: boolean;
}

export const MainNav = styled.nav<Props>`
  background-color: ${({ theme }) => theme.colors.darkTeal};
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 2rem 1rem 1rem;

  ${({ open }) =>
    open &&
    `
   background-color: var(--main-color);
  height: 4rem;
  padding: 2rem 1rem 1rem;
  display: flex;
  justify-content: space-between;
  `}
`;
