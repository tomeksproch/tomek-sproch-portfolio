import MainContent from "../../organisms/MainContent/MainContent";
import MainImage from '../../atoms/MainImage/MainImage';
import AboutContent from "../../organisms/AboutContent/AboutContent";
import CardContent from "../../organisms/CardContent/CardContent";
import {MainPageWrapper, MainPageFirsSectiion,MainPageSecondSectiion , MainPageThirdSectiion, MainPageFourthSectiion } from "./MainPage.styles";
import SendMessageContent from "../../organisms/SendMessageContent/SendMessageContent";
import FooterContent from "../../organisms/FooterContent/FooterContent";

const MainPage = () => {
  return (
    <MainPageWrapper>
      <MainPageFirsSectiion>
        <MainContent />
        <MainImage />
      </MainPageFirsSectiion>
      <MainPageSecondSectiion>
      <AboutContent />
      </MainPageSecondSectiion>
      <MainPageThirdSectiion>
      <CardContent />
      </MainPageThirdSectiion>
      <MainPageFourthSectiion>
      <SendMessageContent />
      </MainPageFourthSectiion>
      <FooterContent/>
    </MainPageWrapper>
  );
};

export default MainPage;
