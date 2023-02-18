import styled from "styled-components";

interface Props {
  open: boolean;
}

export const MainNav = styled.nav<Props>`
  position: absolute;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem;
  width: 100%;

  ${({ open }) =>
    open &&
    `
   background-color: white;
  `}
`;
