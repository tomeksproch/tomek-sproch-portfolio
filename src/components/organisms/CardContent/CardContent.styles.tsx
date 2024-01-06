import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const CardContentStyles = styled.div`
  background-color: ${({ theme }) => theme.colors.pastelWhite};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  padding: 6rem 2rem;

  @media ${QUERIES.tabletAndUp}{
    flex-direction: row;
  }

  @media ${QUERIES.laptopAndUp} {
    height: 100vh;
  }
`;
