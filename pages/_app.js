import Seo from "../components/Seo";
import ScrollToTop from "../components/ScrollToTop";
import { ToastContainer } from "react-toastify";
import Aos from "aos";
import "aos/dist/aos.css";
import "../styles/index.scss";
import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "../styles/Gallary.scss"; 

const AnimatedCursor = dynamic(() => import("react-animated-cursor"), {
  ssr: false,
});

function MyApp({ Component, pageProps }) {
  const [showCursor, setShowCursor] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1200,
      once: true,
    });

    // check screen width on load and on resize
    const handleResize = () => {
      setShowCursor(window.innerWidth > 767);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="page-wrapper">
      <Seo
        font={
          "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800;900&display=swap"
        }
      />

      {showCursor && (
        <AnimatedCursor
          innerSize={8}
          outerSize={44}
          color="153,153,255"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.4}
        />
      )}

      <Component {...pageProps} />

      <ToastContainer />
      <ScrollToTop />
    </div>
  );
}

export default MyApp;