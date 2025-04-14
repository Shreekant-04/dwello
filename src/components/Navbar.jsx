import React, { useState, useEffect } from "react";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import logoDark from "../assets/logo_dark.png";
import logoLight from "../assets/logo_white.png";

const Navbar = ({ isDark, setIsDark }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark);
  }, [isDark]);

  const toggleDarkMode = () => {
    const newTheme = isDark ? "light" : "dark";
    localStorage.setItem("theme", newTheme);
    setIsDark(!isDark);
  };
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = ["Home", "Service", "Agent", "Contact"];

  return (
    <nav className="fixed z-50 top-0 left-0 w-full bg-[#FEF7F2]  p-2  dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="font-bold h-10  flex justify-center ">
          <img
            src={isDark ? logoLight : logoDark}
            alt="A logo named dwello"
            title="home"
            className="object-contain h-full  w-full "
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 items-center font-medium">
          {navLinks.map((link) => (
            <li key={link}>
              <a
                href={`#${link.toLowerCase()}`}
                className="hover:text-blue-500"
              >
                {link}
              </a>
            </li>
          ))}
          <button onClick={toggleDarkMode} className="text-xl cursor-pointer">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center space-x-4">
          <button onClick={toggleDarkMode} className="text-xl">
            {isDark ? <FaSun /> : <FaMoon />}
          </button>
          <button onClick={toggleMenu} className="text-2xl">
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-3 space-y-2">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800"
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
