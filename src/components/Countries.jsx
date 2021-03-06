import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Filter from "./Filter";
import Spinner from "./Spinner";
import "../index.css";

const url = "https://restcountries.com/v2/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <>
      <Filter
        countries={countries}
        setCountries={setCountries}
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        filteredCountries={filteredCountries}
        setFilteredCountries={setFilteredCountries}
      />

      {loading ? (
        <Spinner />
      ) : searchInput.length > 1 ? (
        <div className="countries">
          {filteredCountries.map((country) => {
            const {
              numericCode,
              name,
              alpha3Code,
              flags,
              population,
              region,
              capital,
            } = country;

            return (
              <Link to={`/countries/${alpha3Code}`} key={numericCode}>
                <article key={numericCode}>
                  <div className="flag">
                    <img src={flags.png} alt={name} />
                  </div>
                  <div className="details">
                    <h3>{name}</h3>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span> {region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      ) : (
        <div className="countries">
          {countries.map((country) => {
            const {
              numericCode,
              name,
              alpha3Code,
              flags,
              population,
              region,
              capital,
            } = country;

            return (
              <Link to={`/countries/${alpha3Code}`} key={numericCode}>
                <article key={numericCode}>
                  <div className="flag">
                    <img src={flags.png} alt={name} />
                  </div>
                  <div className="details">
                    <h3>{name}</h3>
                    <h4>
                      Population: <span>{population.toLocaleString()}</span>
                    </h4>
                    <h4>
                      Region: <span> {region}</span>
                    </h4>
                    <h4>
                      Capital: <span>{capital}</span>
                    </h4>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Countries;
