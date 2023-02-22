import styled from "styled-components";

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  text-decoration: none;
  padding-top: 6rem;
  font-size: ${({ theme }) => theme.fontSize.l};

  a {
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
