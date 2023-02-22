import styled from "styled-components";

export const BigMenuWrapper = styled.div`
  --offset: 90px;
  position: absolute;
  top: var(--offset);
  left: 0;
  background-color: ${({ theme }) => theme.colors.pastelWhite};
  height: calc(100vh - var(--offset));
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 4rem 4rem;
  font-weight: ${({ theme }) => theme.fontWeight.normal};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkGrey};
  }
`;
