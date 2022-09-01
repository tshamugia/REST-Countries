import Search from "./search/search";
import "./filter.layout.scss";
import FilterByRegion from "./filter/filter";
import { useState } from "react";

function FilterLayout() {
  return (
    <div className="filter_container">
      <Search />
      <FilterByRegion />
    </div>
  );
}

export default FilterLayout;
