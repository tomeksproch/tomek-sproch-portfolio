import styled from "styled-components";

export const StyledFooterContent = styled.div`
  background-color: ${({ theme }) => theme.colors.darkGrey};
  display: flex;
  flex-direction: column;
  gap: 4rem;
  color: ${({ theme }) => theme.colors.pastelWhite};
  padding: 0rem 2.5rem 2.5rem 2.5rem;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.white};
  }

  h3 {
    color: ${({ theme }) => theme.colors.lightGrey};
    font-weight: ${({ theme }) => theme.fontWeight.normal};
    opacity: 30%;
  }
`;

export const Line = styled.div`
  background-color: ${({ theme }) => theme.colors.lightGrey};
  width: 100%;
  height: 1px;
  position: relative;
`;

export const CreatorText = styled.span`
  color: ${({ theme }) => theme.colors.lightGrey};
  position: relative;
  top: -3rem;
`;
