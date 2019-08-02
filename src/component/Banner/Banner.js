import React from "react";
import "./Banner.css";

import testImg from "../assests/images/testImg.jpg";
import SearchSummoner from "../SearchSummoner/SearchSummoner";

const banner = props => (
  <div className="Banner">
    <img src={testImg} alt="banner" />
    <div className="BannerText">
      <h1>TFT RANK</h1>
      <h2>{props.user}</h2>
      <hr />
      <SearchSummoner onChange={props.onChange} state={props.state} />
    </div>
  </div>
);

export default banner;
