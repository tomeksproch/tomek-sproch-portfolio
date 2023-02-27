import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const TextsWrapper = styled.article`
  @media ${QUERIES.bigDevicesAndUp} {
    font-size: ${({ theme }) => theme.fontSize.xl};
  }
`;
