import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const MainImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.pastelWhite};

  @media ${QUERIES.bigDevicesAndUp} {
    width: 30%;
  }
`;
