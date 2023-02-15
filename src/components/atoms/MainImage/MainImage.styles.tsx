import styled from 'styled-components';

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBeige};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  height: 20rem;
`;

export const ImageStyles = styled.img`
  height: 15em;
`;
