import React from "react";

const Filter = () => {
  const handleSubmit = (e) => e.preventDefault();

  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Country"
        />

        <div className="dropdown">
          <select name="select" id="select">
            <option value="All">Filter By Region</option>
            <option value="Africa">Africa</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Americas">Americas</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </form>
    </>
  );
};

export default Filter;
