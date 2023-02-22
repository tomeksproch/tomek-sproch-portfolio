import styled from "styled-components";

export const MyResumePageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 15rem 2.5rem 4rem 2.5rem;
  color: ${({ theme }) => theme.colors.darkGrey};
  height: 100vh;
  width: 100%;
`;

export const FiledContentCv = styled.h1`
  padding-bottom: 2rem;
`;
