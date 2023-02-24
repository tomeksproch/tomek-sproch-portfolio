import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTopRouterLayout = ({ children }: any) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTopRouterLayout;
