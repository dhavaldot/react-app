import React, { Component } from "react";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "DOT Infotech",
    };
  }
  render() {
    return (
      <div>
        <h1>Heading</h1>
        <div>Home page</div>
        <p>{this.state.name}</p>
        {/* <p>{this.props.name}</p> */}
      </div>
    );
  }
}

export default Home;
