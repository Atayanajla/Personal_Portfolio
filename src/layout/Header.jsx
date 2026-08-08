import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
import Switch from "../components/Switch";

const Header = ({ darkMode, setDarkMode }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navItems = [
    { name: "Home", target: "hero" },
    { name: "About", target: "about" },
    { name: "Experience", target: "experience" },
    { name: "Showcase", target: "showcase" },
    { name: "Contact", target: "contact" },
  ];

  const handleNavClick = (target) => {
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: target } });
    }
    setIsOpen(false);
  };

  return (
    <>
      <header
        // data-aos="fade-down"
        // data-aos-duration="1000"
        className={`fixed top-0 left-0 right-0 z-50 px-6 transition-all duration-300 ${
          isScrolled || isOpen
            ? "py-4 bg-[var(--bg-portfolio)]/95 backdrop-blur-md border-b border-blue-500/30"
            : "py-7 bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <RouterLink
            to="/"
            className="font-bold text-xl tracking-wider cursor-pointer z-50"
          >
            ATAYA <span className="text-blue-500">NAJLA.</span>
          </RouterLink>

          <div className="flex items-center gap-4 md:gap-8">
            <ul className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const isHomePage = location.pathname === "/";

                return (
                  <li key={item.target}>
                    {isHomePage ? (
                      <ScrollLink
                        to={item.target}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={200}
                        className="px-4 py-2 rounded-xl text-sm font-semibold hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 cursor-pointer block"
                        activeClass="bg-blue-500 !text-white shadow-md shadow-blue-500/20"
                      >
                        {item.name}
                      </ScrollLink>
                    ) : (
                      <button
                        onClick={() => handleNavClick(item.target)}
                        className="px-4 py-2 rounded-xl text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-cyan-400 transition-all duration-200 cursor-pointer block bg-transparent border-none"
                      >
                        {item.name}
                      </button>
                    )}
                  </li>
                );
              })}
            </ul>

            <div className="z-50">
              <Switch darkMode={darkMode} setDarkMode={setDarkMode} />
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 md:hidden z-50 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div
        className={`fixed top-20 left-4 right-4 py-8 bg-[var(--bg-portfolio)] flex flex-col justify-center items-center transition-all duration-300 md:hidden z-40 rounded-2xl ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 text-center w-full px-10">
          {navItems.map((item) => {
            const isHomePage = location.pathname === "/";

            return (
              <li key={item.target} className="w-full">
                {isHomePage ? (
                  <ScrollLink
                    to={item.target}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={200}
                    onClick={() => setIsOpen(false)}
                    className="py-2 rounded-2xl text-lg font-bold text-[var(--text-portfolio)] hover:bg-blue-500 hover:text-white transition-all cursor-pointer block"
                    activeClass="bg-blue-500 !text-white shadow-lg shadow-blue-500/20"
                  >
                    {item.name}
                  </ScrollLink>
                ) : (
                  <button
                    onClick={() => handleNavClick(item.target)}
                    className="py-2 rounded-2xl text-lg font-bold text-[var(--text-portfolio)] hover:bg-blue-500 hover:text-white transition-all cursor-pointer block bg-transparent"
                  >
                    {item.name}
                  </button>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
