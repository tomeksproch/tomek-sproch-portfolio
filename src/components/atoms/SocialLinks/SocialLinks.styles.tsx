import styled from "styled-components";

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 2.5rem;
  text-decoration: none;
  padding-top: 8rem;

  a {
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;
