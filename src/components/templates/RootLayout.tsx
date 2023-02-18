import { Outlet } from "react-router";
import Navbar from "../molecules/Navbar/Navbar";
import FooterContent from "../organisms/FooterContent/FooterContent";

const RootLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterContent />
    </>
  );
};

export default RootLayout;
