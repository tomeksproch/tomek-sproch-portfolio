import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 0px 10px 0px 10px;
  height: 330px;
  width: 330px;
  padding: 2.5rem;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  box-shadow: 10px 10px 0px -5px #d9e4dd;

  h2 {
    color: ${({ theme }) => theme.colors.darkGrey};
  }

  @media ${QUERIES.bigDevicesAndUp} {
    height: 700px;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4rem;
    text-align: center;

    h2 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
    }
  }
`;
