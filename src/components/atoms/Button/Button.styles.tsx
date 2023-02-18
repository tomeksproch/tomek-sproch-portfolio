import styled from "styled-components";

export const StyledButton = styled.button`
  background: transparent;
  border: solid 2px ${({ theme }) => theme.colors.darkTeal};
  color: ${({ theme }) => theme.colors.darkTeal};
  height: 3rem;
  width: 12rem;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
