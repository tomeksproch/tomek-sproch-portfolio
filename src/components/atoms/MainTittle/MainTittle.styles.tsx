import styled from "styled-components";

export const StyledMainTittle = styled.h1`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.xxxl};
  line-height: 1em;
  padding-top: 3rem;
  overflow-wrap: inherit;
  max-width: 7em;
`;
