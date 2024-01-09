import AboutContent from "../../organisms/AboutContent/AboutContent";
import CardContent from "../../organisms/CardContent/CardContent";
import {MainPageWrapper } from "./MainPage.styles";
import SendMessageContent from "../../organisms/SendMessageContent/SendMessageContent";
import HeroSectionContent from "../../organisms/HeroSectionContent/HeroSectionContent";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <HeroSectionContent/>
      <AboutContent />
      <CardContent />
      <SendMessageContent />
    </MainPageWrapper>
  );
};

export default MainPage;
