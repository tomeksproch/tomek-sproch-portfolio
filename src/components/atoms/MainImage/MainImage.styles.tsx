import styled from "styled-components";

interface Props {
  open: boolean;
}

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 3rem 5rem 3rem;

  @media screen and (min-width: 581px) {
    height: 50%;
    width: 10rem;
  }
`;

export const ImageStyles = styled.img<Props>`
  height: 15em;
  @media screen and (min-width: 581px) {
    height: 15em;
    position: ${({ open }) => (open ? "" : "absolute")};
    right: 1rem;
    top: 25%;
  }
`;
