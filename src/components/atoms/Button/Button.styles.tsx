import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const StyledButton = styled.button`
  background: transparent;
  border: solid 2px ${({ theme }) => theme.colors.darkGrey};
  color: ${({ theme }) => theme.colors.darkGrey};
  height: 3rem;
  width: 12rem;
  display: flex;
  justify-content: space-around;
  align-items: center;


  @media ${QUERIES.laptopAndUp} {
    font-size: ${({ theme }) => theme.fontSize.l};
    width: 18rem;
  }

  @media ${QUERIES.bigDevicesAndUp} {
    font-size: ${({ theme }) => theme.fontSize.xl};
    height: 4rem;
  }
`;
