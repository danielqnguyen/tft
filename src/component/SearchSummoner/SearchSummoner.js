import React from "react";
import "./SearchSummoner.css";

const SearchSummoner = props => (
  <>
    <select className="region">
      <option value="NA1">NA</option>
      <option value="EU1">EU</option>
      <option value="KR">KR</option>
    </select>
    <input className="search" onChange={props.onChange} />
  </>
);

export default SearchSummoner;
