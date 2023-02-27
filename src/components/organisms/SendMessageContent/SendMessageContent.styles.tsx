import styled from "styled-components";
import { QUERIES } from "../../../assets/styles/theme";

export const SendMeMessageWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.darkGrey};
  padding: 10rem 2.5rem 10rem 2.5rem;

  @media ${QUERIES.bigDevicesAndUp} {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.xxxl};
  }
`;

export const StyledForm = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  @media ${QUERIES.bigDevicesAndUp} {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    max-width: 800px;
    gap: 3rem;
  }
`;
