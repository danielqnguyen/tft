import React from "react";
import "./Banner.css";

import SearchSummoner from "../SearchSummoner/SearchSummoner";

const banner = props => (
  <div className="Banner">
    <div className="BannerText">
      <h1>TFT RANK SEARCH</h1>
      <h2>{props.user}</h2>
      <SearchSummoner
        onChange={props.onChange}
        state={props.state}
        onClick={props.onClick}
      />
    </div>
  </div>
);

export default banner;
