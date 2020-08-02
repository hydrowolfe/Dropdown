import React, { Component } from "react";
import DemoChild from "./DemoChild";

class DemoParent extends Component {
  state = {
    countries: [
      { id: 1, value: "Singapore" },
      { id: 2, value: "Malaysia" },
    ],
  };

  // handle event and change state
  handleEvent = () => {
    this.setState({
      countries: this.state.countries.filter((item) => item.id !== 1),
    });
  };

  render() {
    return (
      <DemoChild
        handleEvent={this.handleEvent}
        countries={this.state.countries}
      />
    );
  }
}

export default DemoParent;
