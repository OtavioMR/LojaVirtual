import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  // O hook useLocation nos avisa toda vez que a URL mudar
  const { pathname } = useLocation();

  useEffect(() => {
    // Quando a URL mudar, joga o scroll para o topo (x:0, y:0)
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;