import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  const [theme, setTheme] = useState("dark-theme");

  const changeTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme]);

  return (
    <header className="header">
      <div>
        <h1>Where in the world?</h1>
      </div>

      <div>
        <button className="btn-moon" onClick={changeTheme}>
          <FaMoon />
          <FaSun />
          Change Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
