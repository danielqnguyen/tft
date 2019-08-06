import React, { Component } from "react";
import "./Display.css";

const Display = props => {
  console.log(props.location);
  let data = props.location;
  return (
    <div className="Banner">
      <h1 className="spacing">{data.sN}</h1>
      <h2 className="spacing">
        {data.tier}
        {data.rank} points:
        {data.points}
      </h2>
      <h2 className="spacing">
        Wins:{data.wins} Losses:{data.losses}
      </h2>
    </div>
  );
};

export default Display;
