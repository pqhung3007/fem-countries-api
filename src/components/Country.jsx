import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import "../country.css";

const Country = () => {
  const [country, setCountry] = useState([]);
  const { code } = useParams();
  const url = `https://restcountries.com/v2/alpha?codes=${code}`;

  const fetchCountryInfo = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setCountry(data);
    console.log(data);
  };

  useEffect(() => {
    fetchCountryInfo();
    // eslint-disable-next-line
  }, [code]);

  return (
    <section className="country">
      <Link to="/" className="btn btn-light">
        Back Home
      </Link>
      {country.map((c) => {
        const {
          numericCode,
          name,
          nativeName,
          flag,
          population,
          region,
          subregion,
          capital,
          languages,
          currencies,
          timezones,
          borders,
        } = c;

        return (
          <article key={numericCode}>
            <div className="country-inner">
              <div className="country-flag">
                <img src={flag} alt={name} />
              </div>

              <div className="country-details">
                <h2>{name}</h2>
                <div className="first-detail">
                  <h5>
                    Native Name: <span>{nativeName}</span>
                  </h5>
                  <h5>
                    Population: <span>{population.toLocaleString()}</span>
                  </h5>
                  <h5>
                    Region: <span>{region}</span>
                  </h5>
                  <h5>
                    Sub Region: <span>{subregion}</span>
                  </h5>
                  <h5>
                    Capital: <span>{capital}</span>
                  </h5>
                </div>

                <div className="second-detail">
                  <h5>
                    Timezones: <span>{timezones[0]}</span>
                  </h5>
                  <h5>
                    Currencies:{" "}
                    <span>
                      {currencies[0].name} ({currencies[0].symbol})
                    </span>
                  </h5>
                  <h5>
                    Languages: <span>{languages[0].name}</span>
                  </h5>
                </div>

                <div className="third-detail">
                  <h3>Border Countries: </h3>
                  <div className="borders">
                    {borders ? (
                      borders.map((border) => {
                        return (
                          <ul key={border}>
                            <li>{border}</li>
                          </ul>
                        );
                      })
                    ) : (
                      <p style={{ marginTop: "1rem" }}>No border country</p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </section>
  );
};

export default Country;
