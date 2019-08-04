import React from "react";
import "./SearchSummoner.css";

const SearchSummoner = props => (
  <>
    <select
      className="region"
      name="region"
      region={props.state.region}
      onChange={props.onChange}
    >
      <option value="NA1">NA</option>
      <option value="EU1">EU</option>
      <option value="KR">KR</option>
    </select>
    <input
      className="search"
      name="user"
      onChange={props.onChange}
      user={props.state.user}
    />
    <button type="button" className="sButton" onClick={props.onClick}>
      Search
    </button>
  </>
);

export default SearchSummoner;
