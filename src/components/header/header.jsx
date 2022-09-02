import { ImContrast } from "react-icons/im";
import { useContext } from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { CountryContext } from "../../context/CountryContext";

function Header() {
  const {theme, setTheme} = useContext(CountryContext);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  

  return (
    <div className="header">
      <div className="header_container">
        <Link to={"/"} className={theme === 'light' ? "title-light" : 'title-dark'}>
          Where in the world?
        </Link>

        <div className="switcher" onClick={toggleTheme}>
          <ImContrast></ImContrast>
          {theme === "light" ? <span>Dark Mode</span> : <span>Light Mode</span>}
        </div>
      </div>
    </div>
  );
}

export default Header;
