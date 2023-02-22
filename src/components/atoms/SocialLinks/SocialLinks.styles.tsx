import styled from "styled-components";

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: space-around;
  text-decoration: none;
  padding-top: 9rem;
  font-size: ${({ theme }) => theme.fontSize.l};

  a {
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;
