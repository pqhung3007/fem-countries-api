// import React, { useEffect } from "react";

const Filter = ({
  countries,
  setCountries,
  searchInput,
  setSearchInput,
  filteredCountries,
  setFilteredCountries,
}) => {
  //   const regions = [
  //     {
  //       name: "Filter by region",
  //       desc: "All",
  //     },
  //     {
  //       name: "Africa",
  //       desc: "Africa",
  //     },
  //     {
  //       name: "Americas",
  //       desc: "Americas",
  //     },
  //     {
  //       name: "Asia",
  //       desc: "Asia",
  //     },
  //     {
  //       name: "Europe",
  //       desc: "Europe",
  //     },
  //     {
  //       name: "Oceania",
  //       desc: "Oceania",
  //     },
  //   ];

  const handleSubmit = (e) => e.preventDefault();

  const getSearchedCountries = (searchValue) => {
    setSearchInput(searchValue);

    if (searchInput) {
      const filteredCountries = countries.filter((country) =>
        country.name.toLowerCase().includes(searchValue.toLowerCase())
      );
      setFilteredCountries(filteredCountries);
    } else {
      setFilteredCountries(countries);
    }
  };

  //   const filterByRegions = async (region) => {
  //     const response = await fetch(
  //       `https://restcountries.com/v3.1/region/${region}`
  //     );
  //     const data = await response.json();
  //     setCountries(data);
  //     console.log(data);
  //   };

  //   useEffect(() => {
  //     filterByRegions();
  //     // eslint-disable-next-line
  //   }, []);

  return (
    <>
      <form className="form" id="form" onSubmit={handleSubmit}>
        <input
          type="search"
          name="search"
          id="search"
          placeholder="Search Country"
          onChange={(e) => getSearchedCountries(e.target.value)}
        />

        <div className="dropdown">
          <select
            name="select"
            id="select"
            // onChange={(e) => filterByRegions(e.target.value)}
            // value={regions.name}
          >
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
