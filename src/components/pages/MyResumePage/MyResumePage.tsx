import React from "react";
import Button from "../../atoms/Button/Button";
import { MyResumePageWrapper, FiledContentCv } from "./MyResumePage.styles";

const MyResumePage = () => {
  return (
    <MyResumePageWrapper>
      <FiledContentCv>
        Sorry, this content will be filled soon! 😢
      </FiledContentCv>
      <Button tittle="Download my CV!" />
    </MyResumePageWrapper>
  );
};

export default MyResumePage;
