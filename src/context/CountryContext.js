import { useState, useEffect, createContext } from "react";

import { fetchCountries } from "../api/http";

const CountryContext = createContext();

function CountryContextProvider({ children }) {
  const [country, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  console.log("country --->", country);

  useEffect(() => {
    setLoading(true);
    fetchCountries()
      .then((data) => setCountries(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  return (
    <CountryContext.Provider value={{ country, error, loading, setQuery, query, region, setRegion }}>
      {children}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountryContextProvider };
