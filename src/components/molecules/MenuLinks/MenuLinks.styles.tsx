import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const BigMenuWrapper = styled.div`
  --offset: 90px;
  position: absolute;
  top: var(--offset);
  left: 0;
  background-color: ${({ theme }) => theme.colors.initialColor};
  height: calc(100vh - var(--offset));
  width: 100%;

  @media ${QUERIES.bigDevicesAndUp} {
    --offsetDesktop: 40px;
    width: 390px;
    height: 560px;
    position: fixed;
    left: 80%;
    top: var(--offsetDesktop);
    box-shadow: 10px 10px 0px -5px #d9e4dd;
    z-index: 1;
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
