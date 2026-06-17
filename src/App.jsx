import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom"; 
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import "aos/dist/aos.css";
import AOS from "aos";

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  useEffect(() => {
    AOS.init({
      duration: 800,   
      once: true,      
      easing: "ease-out-cubic", 
    });
  }, []);

  return (
    <div className="min-h-screen bg-portfolio text-portfolio transition-colors duration-300 flex flex-col justify-between">
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <main className="flex-grow">
        <Outlet /> 
      </main>
      <Footer />
    </div>
  );
};

export default App;