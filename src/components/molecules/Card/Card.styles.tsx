import styled from "styled-components";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.lightTeal};
  border-radius: 0px 10px 0px 10px;
  height: 330px;
  width: 330px;
  padding: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  h2 {
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;
