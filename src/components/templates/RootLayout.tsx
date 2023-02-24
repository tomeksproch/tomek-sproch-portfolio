import { Outlet } from "react-router";
import Navbar from "../molecules/Navbar/Navbar";
import FooterContent from "../organisms/FooterContent/FooterContent";
import ScrollToTopRouterLayout from "./ScrollToTopRouterLayout";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <ScrollToTopRouterLayout>
        <Outlet />
      </ScrollToTopRouterLayout>
      <FooterContent />
    </>
  );
};

export default RootLayout;
