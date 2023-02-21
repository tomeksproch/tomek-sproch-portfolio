import { useContext } from "react";
import { ImageWrapper, ImageStyles } from "./MainImage.styles";
import sprochImage from "../../../assets/images/tomasz-sproch-image.jpg";
import { NavigationContext } from "../../../context/NavigationContext";

const MainImage = () => {
  const { open } = useContext(NavigationContext);
  return (
    <ImageWrapper>
      <ImageStyles open={open} alt="TomaszSproch.jpg" src={sprochImage} />
    </ImageWrapper>
  );
};

export default MainImage;
