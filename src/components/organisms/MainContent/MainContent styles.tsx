import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const MainContentArticle = styled.article`
  background-color: ${({ theme }) => theme.colors.pastelTeal};
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 7rem 2.5rem 2.5rem 2.5rem;

  @media ${QUERIES.bigDevicesAndUp} {
    width: 70%;
    height: 50rem;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 15rem;
  }
`;
