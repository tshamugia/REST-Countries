import "./filter.scss";
import { useState } from "react";
import { useContext } from "react";
import { CountryContext } from "../../../context/CountryContext";

function FilterByRegion() {
  const [open, setOpen] = useState(false);
  const { region, setRegion } = useContext(CountryContext);

  const options = ["Europe", "Asia", "Americas", "Africa", "Oceania"];

  return (
    <div className="dropdown">
      <div className="dropdown__select" onClick={() => setOpen(!open)}>
        <span className="dropdown__select--selected">{region === "" ? "Filter by Region...." : `${region}`}</span>
        <div className={open ? "dropdown__select--caret caret--rotate" : "dropdown__select--caret"}></div>
      </div>
      {open && (
        <ul className="dropdown__menu">
          {options.map((reg, k) => (
            <li key={k} onClick={() => setRegion(reg)(setOpen(!open))}>
              {reg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterByRegion;
