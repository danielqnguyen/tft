import React, { Component } from "react";
import "./Display.css";
import testApi from "../../testService/testService";

class Display extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    if (!this.props.location.sN) {
      testApi.testOne(
        this.props.match.params.user,
        resp => {
          testApi.testTwo(
            resp.data.id,
            resp => {
              for (let i = 0; i < resp.data.length; i++) {
                if (resp.data[i].queueType !== "RANKED_TFT") {
                  console.log("no");
                } else {
                  let data = resp.data[i];
                  this.setState({
                    sN: data.summonerName,
                    tier: data.tier,
                    rank: data.rank,
                    points: data.leaguePoints,
                    wins: data.wins,
                    losses: data.losses
                  });
                }
              }
            },
            error => console.log(error)
          );
        },
        error => console.error(error)
      );
    } else {
      let data = this.props.location;
      this.setState({
        sN: data.sN,
        tier: data.tier,
        rank: data.rank,
        points: data.points,
        wins: data.wins,
        losses: data.losses
      });
    }
  }

  onSuccess = resp => {
    for (let i = 0; i < resp.data.length; i++) {
      if (resp.data[i].queueType !== "RANKED_TFT") {
        console.log("no");
      } else {
        let data = resp.data[i];
        this.setState({
          sN: data.summonerName,
          tier: data.tier,
          rank: data.rank,
          points: data.leaguePoints,
          wins: data.wins,
          losses: data.losses
        });
      }
    }
  };

  render() {
    return (
      <div className="Banner">
        <h1 className="spacing">{this.state.sN}</h1>
        <h2 className="spacing">
          {this.state.tier}
          {this.state.rank} points:
          {this.state.points}
        </h2>
        <h2 className="spacing">
          Wins:{this.state.wins} Losses:{this.state.losses}
        </h2>
      </div>
    );
  }
}

export default Display;
