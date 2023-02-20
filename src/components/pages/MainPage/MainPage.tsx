import MainContent from "../../organisms/MainContent/MainContent";
import MainImageContent from "../../organisms/MainImageContent/MainImageContent";
import AboutContent from "../../organisms/AboutContent/AboutContent";
import CardContent from "../../organisms/CardContent/CardContent";
import { MainPageFirsSectiion } from "./MainPage.styles";

const MainPage = () => {
  return (
    <div>
      <MainPageFirsSectiion>
        <MainContent />
        <MainImageContent />
      </MainPageFirsSectiion>
      <AboutContent />
      <CardContent />
    </div>
  );
};

export default MainPage;
