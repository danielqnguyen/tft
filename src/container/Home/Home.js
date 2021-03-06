import React, { Component } from "react";
import Banner from "../../component/Banner/Banner";
import testApi from "../../testService/testService";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      region: ""
    };
  }

  onChange = evt => {
    this.setState({ [evt.target.name]: evt.target.value });
  };

  onClick = () => {
    if (!this.state.user) {
      alert("please enter a username");
    } else {
      if (!this.state.region) {
        this.setState({ region: "NA1" });
      }
      testApi.testOne(
        this.state.user,
        resp => {
          testApi.testTwo(resp.data.id, this.onSuccess, error =>
            console.log(error)
          );
        },
        error => console.error(error)
      );
    }
  };

  onSuccess = resp => {
    for (let i = 0; i < resp.data.length; i++) {
      if (resp.data[i].queueType !== "RANKED_TFT") {
        console.log("no");
      } else {
        let data = resp.data[i];
        console.log(resp.data[i]);
        this.props.history.push({
          pathname: "/profile/" + this.state.region + "/" + data.summonerName,
          sN: data.summonerName,
          tier: data.tier,
          rank: data.rank,
          points: data.leaguePoints,
          wins: data.wins,
          losses: data.losses
          //can probably remove setting data here and allow the params on the next page handle
          //data
        });
      }
    }
  };

  render() {
    return (
      <>
        <Banner
          onChange={this.onChange}
          state={this.state}
          onClick={this.onClick}
        />
      </>
    );
  }
}

export default Home;
