
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useLocation } from "react-router";

function App() {
 

  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubc",
      once: false,
      
    });
  }, []);

  useEffect(() => {
    AOS.refresh();
  }, []);

  return (
    <>
   
    </>
  );
}

export default App;
