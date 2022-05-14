import React, { useState, useEffect } from "react";

const url = "https://restcountries.com/v3.1/all";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCountries = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountries(data);
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return (
    <div className="countries">
      {countries.map((country, index) => {
        const { name, flags, population, region, capital } = country;

        return (
          <article key={index}>
            <div className="flag">
              <img src={flags.png} alt={name} />
            </div>
            <div className="details">
              <h3>{name.common}</h3>
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
        );
      })}
    </div>
  );
};

export default Countries;
