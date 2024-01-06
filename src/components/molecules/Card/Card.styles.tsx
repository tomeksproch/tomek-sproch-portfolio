import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const CardWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  border-radius: 0px 10px 0px 10px;
  height: 330px;
  padding: 2.5rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  box-shadow: 10px 10px 0px -5px #d9e4dd;

  h2 {
    color: ${({ theme }) => theme.colors.darkGrey};
    text-align: left;
    max-width: 270px;
  }

  article{
    text-align: left;
    max-width: 250px;
  }

  @media ${QUERIES.laptopAndUp} {
    height: 550px;
    width: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 2rem;
    padding: 4rem;
    font-size: ${({ theme }) => theme.fontSize.l};


    h2 {
      font-size: ${({ theme }) => theme.fontSize.xxxl};
      text-align: left;
    }
  }
`;
