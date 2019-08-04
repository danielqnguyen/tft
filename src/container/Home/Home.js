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
    testApi.testOne(
      this.state.user,
      resp => {
        testApi.testTwo(resp.data.id, this.onSuccess, error =>
          console.log(error)
        );
      },
      error => console.error(error)
    );
  };

  onSuccess = resp => {
    for (let i = 0; i < resp.data.length; i++) {
      if (resp.data[i].queueType !== "RANKED_TFT") {
        console.log("no");
      } else {
        console.log(resp);
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
