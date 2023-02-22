import React from "react";
import Button from "../../atoms/Button/Button";
import { FiledContent, MyProjectsPageWrapper } from "./MyProjectsPage.styles";

const MyProjectsPage = () => {
  return (
    <MyProjectsPageWrapper>
      <FiledContent>Sorry, this content will be filled soon! 😢 </FiledContent>
      <Button tittle="Go to my Github!" />
    </MyProjectsPageWrapper>
  );
};

export default MyProjectsPage;
