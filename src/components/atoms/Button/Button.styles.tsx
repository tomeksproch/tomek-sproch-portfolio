import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: solid 2px ${({ theme }) => theme.colors.darkTeal};
  color: ${({ theme }) => theme.colors.darkTeal};
  height: 3rem;
  width: 15rem;
`;
