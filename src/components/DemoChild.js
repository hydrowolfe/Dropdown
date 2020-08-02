import React, { Component } from "react";

class DemoChild extends Component {
  // event happens here and gets raised
  render() {
    // return this.props.countries.map((country) => (
    //   <button onClick={this.props.handleEvent}>{country.value}</button>
    // ));
    return this.props.countries.map((country) => (
      <button onClick={this.props.handleEvent}>{country.value}</button>
    ));
  }
}
export default DemoChild;
