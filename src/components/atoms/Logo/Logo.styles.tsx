import styled from 'styled-components';

interface Props {
  open: boolean;
}

export const LogoWrapper = styled.button<Props>`
  background: none;
  color: ${({ theme, open }) => (open ? theme.colors.darkTeal : theme.colors.lightBeige)};
  font-size: ${({ theme }) => theme.fontSize.xxl};
`;

export const FirstEl = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.light};
`;
export const SecondEl = styled.span`
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;
