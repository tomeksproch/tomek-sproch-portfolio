import styled from "styled-components";

export const StyledContactMeLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  gap: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.l};
  
  a{
    width: max-content;
  }

  h3 {
    display: flex;
    font-size: ${({ theme }) => theme.fontSize.l};
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
  }
`;
