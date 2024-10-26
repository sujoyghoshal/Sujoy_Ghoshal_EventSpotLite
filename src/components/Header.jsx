import React, { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import "../styles/toggle.css";

const Header = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    document.body.classList.toggle("dark-mode", !darkMode);
  };

  return (
    <header className="header bg-gradient-to-r from-purple-600 to-blue-500 text-white py-6 animate-fadeInDown">
      <div className="flex justify-between items-center px-6">
        <div>
          <h1 className="text-4xl font-bold">EventSpot</h1>
          <p className="text-lg mt-2">Discover upcoming events around you!</p>
        </div>
        <button className="theme-toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? <FaSun className="icon" /> : <FaMoon className="icon" />}
        </button>
      </div>
    </header>
  );
};

export default Header;
