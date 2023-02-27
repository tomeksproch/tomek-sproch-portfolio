import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const CardContentStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.pastelWhite};
  padding: 5rem 2rem 5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px;

  @media ${QUERIES.bigDevicesAndUp} {
    height: 100vh;
  }
`;
