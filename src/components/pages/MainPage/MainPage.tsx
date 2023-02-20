import MainContent from "../../organisms/MainContent/MainContent";
import MainImageContent from "../../organisms/MainImageContent/MainImageContent";
import AboutContent from "../../organisms/AboutContent/AboutContent";
import CardContent from "../../organisms/CardContent/CardContent";
import { MainPageFirsSectiion } from "./MainPage.styles";
import SendMessageContent from "../../organisms/SendMessageContent/SendMessageContent";

const MainPage = () => {
  return (
    <div>
      <MainPageFirsSectiion>
        <MainContent />
        <MainImageContent />
      </MainPageFirsSectiion>
      <AboutContent />
      <CardContent />
      <SendMessageContent />
    </div>
  );
};

export default MainPage;
