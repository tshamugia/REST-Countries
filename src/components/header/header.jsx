import { ImContrast } from "react-icons/im";
import { useEffect, useState } from "react";
import "./header.scss";
import { Link } from "react-router-dom";

function Header() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    const header = document.querySelector(".header");
    header.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="header">
      <div className="header_container">
        <Link to={"/"} className="title">
          Where in the world?
        </Link>

        <div className="switcher" onClick={(console.log("clicked"), toggleTheme)}>
          <ImContrast></ImContrast>
          {theme === "light" ? <span>Dark Mode</span> : <span>Light Mode</span>}
        </div>
      </div>
    </div>
  );
}

export default Header;
