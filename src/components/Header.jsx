import React, { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const getLocalStorageTheme = () => {
  let theme = "dark-theme";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Header = () => {
  const [theme, setTheme] = useState(getLocalStorageTheme());

  const changeTheme = () => {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <header className="header">
      <div>
        <h1>Where in the world?</h1>
      </div>

      <div>
        <button className="btn-moon" onClick={changeTheme}>
          {theme === "dark-theme" ? (
            <>
              <FaMoon />
              Switch to Night Mode
            </>
          ) : (
            <>
              <FaSun />
              Switch to Light Mode
            </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;
