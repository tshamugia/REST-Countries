import { useState, useEffect, createContext } from "react";

import { fetchCountries } from "../api/http";

const CountryContext = createContext();

function CountryContextProvider({ children }) {
  const [country, setCountries] = useState([]);
  const [query, setQuery] = useState("");
  const [region, setRegion] = useState("");
  const [theme, setTheme] = useState("light");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);


  

  useEffect(() => {
    setLoading(true);
    fetchCountries()
      .then((data) => setCountries(data))
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    const header = document.querySelector(".header");
    header.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <CountryContext.Provider value={{ country, error, loading, setQuery, query, region, setRegion, setCountries, theme, setTheme}}>
      {children}
    </CountryContext.Provider>
  );
}

export { CountryContext, CountryContextProvider };
