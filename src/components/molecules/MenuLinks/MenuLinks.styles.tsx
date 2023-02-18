import styled from "styled-components";

export const BigMenuWrapper = styled.div`
  --offset: 90px;
  position: absolute;
  top: var(--offset);
  left: 0;
  background-color: ${({ theme }) => theme.colors.white};
  height: calc(100vh - var(--offset));
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkTeal};
  padding: 5rem 3rem 3rem 3rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;
