import "./filter.scss";
import { useState, useEffect, useRef } from "react";
import { useContext } from "react";
import { CountryContext } from "../../../context/CountryContext";


function FilterByRegion() {
  const [open, setOpen] = useState(false);
  const { region, setRegion, theme } = useContext(CountryContext);

  const options = ["Europe", "Asia", "Americas", "Africa", "Oceania"];

  
  const handleClickOutside = (e) => {
    if(!ref.current.contains(e.target)){
      
      setOpen(false)
    }
  }

  const ref = useRef(null);

  useEffect(()=>{
    document.addEventListener("click", handleClickOutside, true );

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    }
  },[])



  return (
    <div className="dropdown" ref={ref}>
      <div className={`dropdown__select ${theme}`} onClick={() => setOpen(!open)}>
        <span className="dropdown__select--selected">{region === "" ? "Filter by Region...." : region}</span>
        <div className={open ? "dropdown__select--caret caret--rotate" : "dropdown__select--caret"}></div>
      </div>
      {open && (
        <ul className={theme === "light" ? "dropdown__menu" : "dropdown__menu dropdown__menu__dark" }>
          {options.map((reg, k) => (
            <li className={theme === "light" ? "" : "li__dark"} key={k} onClick={() => {setOpen(!open); setRegion(reg)}}>
              {reg}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default FilterByRegion;
