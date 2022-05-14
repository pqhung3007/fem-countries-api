import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const Header = () => {
  return (
    <header className="header">
      <div>
        <h1>Where in the world?</h1>
      </div>

      <div>
        <button className="btn-moon">
          <FaMoon />
          <FaSun />
          Change Theme
        </button>
      </div>
    </header>
  );
};

export default Header;
