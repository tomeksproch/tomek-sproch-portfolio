import styled from "styled-components";

export const StyledContactMeLinks = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  align-items: center;
  padding-top: 2rem;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.lightTeal};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    padding-bottom: 1rem;
  }
`;
