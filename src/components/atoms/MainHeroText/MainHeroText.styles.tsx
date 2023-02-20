import styled from "styled-components";

export const MainText = styled.main`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media screen and (min-width: 581px) {
    max-width: 15em;
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;
