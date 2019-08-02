import React, { Component } from "react";
import Banner from "../../component/Banner/Banner";

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
  render() {
    return (
      <>
        <Banner onChange={this.onChange} state={this.state} />
      </>
    );
  }
}

export default Home;
