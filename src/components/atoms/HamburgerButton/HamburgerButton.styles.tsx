import styled from "styled-components";

export const Burger = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background: transparent;
  color: ${({ theme }) => theme.colors.white};

  @media screen and (min-width: 581px) {
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;
