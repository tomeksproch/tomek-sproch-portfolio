import styled from "styled-components";

export const CardContentStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.darkTeal};
  padding: 5rem 2rem 5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
