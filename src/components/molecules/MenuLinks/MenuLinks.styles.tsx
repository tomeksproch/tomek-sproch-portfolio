import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const BigMenuWrapper = styled.div`
  --offset: 90px;
  position: absolute;
  top: var(--offset);
  background-color: ${({ theme }) => theme.colors.initialColor};
  height: calc(100vh - var(--offset));
  width: 100%;
  z-index: 9999;

  @media (max-width: 550px) {
    left: 0;
   }

  @media ${QUERIES.tabletAndUp} {
    width: 370px;
    height: 560px;
    position: fixed;
    top: 1rem;
    right: 1.5rem;
    box-shadow: 10px 10px 0px -5px #d9e4dd;
  }
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
