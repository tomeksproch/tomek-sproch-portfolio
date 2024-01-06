import MainContent from "../../organisms/MainContent/MainContent";
import MainImage from '../../atoms/MainImage/MainImage';
import AboutContent from "../../organisms/AboutContent/AboutContent";
import CardContent from "../../organisms/CardContent/CardContent";
import { MainPageFirsSectiion } from "./MainPage.styles";
import SendMessageContent from "../../organisms/SendMessageContent/SendMessageContent";
import {MainPageWrapper} from "./MainPage.styles";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <MainPageFirsSectiion>
        <MainContent />
        <MainImage />
      </MainPageFirsSectiion>
      <AboutContent />
      <CardContent />
      <SendMessageContent />
    </MainPageWrapper>
  );
};

export default MainPage;
