import { ImSearch } from "react-icons/im";
import "./search.scss";

function Search() {
  return (
    <form className="search">
      <div className="search__box">
        <ImSearch style={{ color: "grey" }}></ImSearch>
        <input type="text" placeholder="Search for a Country..." style={{ color: "gray" }}></input>
      </div>
    </form>
  );
}

export default Search;
