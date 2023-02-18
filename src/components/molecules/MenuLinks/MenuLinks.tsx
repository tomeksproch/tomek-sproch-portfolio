import { BigMenuWrapper, Wrapper } from "./MenuLinks.styles";
import NavigationLinks from "../../atoms/NavigationLinks/NavigationLinks";
import SocialLinks from "../../atoms/SocialLinks/SocialLinks";
import ContactMeLinks from "../../atoms/ContactMeLinks/ContactMeLinks";

const MenuLinks = () => {
  return (
    <BigMenuWrapper>
      <Wrapper>
        <NavigationLinks />
        <ContactMeLinks />
        <SocialLinks />
      </Wrapper>
    </BigMenuWrapper>
  );
};

export default MenuLinks;
