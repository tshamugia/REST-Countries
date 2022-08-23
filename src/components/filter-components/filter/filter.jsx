import "./filter.scss";
import { useState } from "react";

function FilterByRegion() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("Filter by Region...");

  const options = ["Europe", "Asia", "America", "Africa", "Oceania"];

  return (
    <div className="dropdown">
      <div className="dropdown__select" onClick={() => setOpen(!open)}>
        <span className="dropdown__select--selected">{selected}</span>
        <div className={open ? "dropdown__select--caret caret--rotate" : "dropdown__select--caret"}></div>
      </div>
      {open && (
        <ul className="dropdown__menu">
          {options.map((reg, k) => (
            <li key={k} onClick={() => setSelected(reg)(setOpen(!open))}>
              {reg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterByRegion;
