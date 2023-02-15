import styled from 'styled-components';

export const BigMenuWrapper = styled.div`
  --offset: 64px;
  position: absolute;
  top: var(--offset);
  left: 0;
  background-color: ${({ theme }) => theme.colors.lightBeige};
  height: calc(100vh - var(--offset));
  width: 100vw;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.darkTeal};
  padding: 3rem;
  font-size: ${({ theme }) => theme.fontSize.xl};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;

export const FirstBlockMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  padding-bottom: 3rem;
`;

export const SecondBlockMenu = styled.div`
  display: flex;
  flex-direction: column;
  text-decoration: none;
  justify-content: center;
  align-items: center;

  h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ theme }) => theme.colors.lightTeal};
    font-weight: ${({ theme }) => theme.fontWeight.light};
  }
`;

export const ThirdBlockMenu = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  text-decoration: none;
  padding-top: 3rem;

  a {
    color: ${({ theme }) => theme.colors.darkTeal};
  }
`;
