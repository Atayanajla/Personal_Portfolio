import { useEffect } from "react";
import { useLocation } from "react-router-dom"; 
import { scroller } from "react-scroll";        

import Hero from "../sections/Hero";
import AboutMe from "../sections/AboutMe";
import Experience from "../sections/Experience";
import Showcase from "../sections/Showcase";
import Contact from "../sections/Contact";

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.scrollTo) {
      const target = location.state.scrollTo;

      setTimeout(() => {
        scroller.scrollTo(target, {
          duration: 200,
          smooth: true,
          offset: -80,
        });
      }, 100);
      window.history.replaceState({}, document.title);
    }
  }, [location]);

  return (
    <>
      <Hero />
      <AboutMe />
      <Experience />
      <Showcase />
      <Contact />
    </>
  );
};

export default Home;