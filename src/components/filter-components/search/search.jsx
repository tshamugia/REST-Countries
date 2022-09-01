import { ImSearch } from "react-icons/im";
import { useContext } from "react";
import "./search.scss";
import { CountryContext } from "../../../context/CountryContext";

function Search() {
  const { query, setQuery } = useContext(CountryContext);
  return (
    <form className="search">
      <div className="search__box">
        <ImSearch style={{ color: "grey" }}></ImSearch>
        <input
          onChange={(e) => setQuery(e.target.value)}
          type="text"
          value={query}
          placeholder="Search for a Country..."
          style={{ color: "gray" }}
        ></input>
      </div>
    </form>
  );
}

export default Search;
