import styled from "styled-components";

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBeige};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  height: 20rem;

  @media screen and (min-width: 581px) {
    height: 50%;
    width: 10rem;
  }
`;

export const ImageStyles = styled.img`
  height: 15em;
  @media screen and (min-width: 581px) {
    position: absolute;
    right: 1rem;
    top: 25%;
  }
`;
