import styled from "styled-components";

export const StyledContactMeLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding-top: 3rem;
  gap: 1rem;
  font-size: ${({ theme }) => theme.fontSize.l};

  h3 {
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;
