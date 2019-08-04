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
        console.log(resp);
      },
      error => console.error(error)
    );
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
