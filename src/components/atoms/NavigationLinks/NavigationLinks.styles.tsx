import styled from "styled-components";

export const StyledNavigationLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.l};
`;
