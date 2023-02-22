import styled from "styled-components";

export const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  padding: 7rem 2.5rem 7rem 2.5rem;
`;
