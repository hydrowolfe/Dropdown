import React, { Component } from "react";
import Dropdown from "../../node_modules/react-bootstrap/Dropdown";

class DemoChild extends Component {
  // event happens here and gets raised
  render() {
    // return this.props.countries.map((country) => (
    //   <button onClick={this.props.handleEvent}>{country.value}</button>
    // ));
    // if (this.props.countries.length === 0) {
    //   return <Dropdown.Item>Empty</Dropdown.Item>;
    // } else {
    return this.props.countries.map((country) => (
      <React.Fragment>
        <Dropdown.Item
          key={country.id}
          eventKey={country.value}
          //   onClick={this.props.handleEvent.bind(this, country.value)}
        >
          {country.value}
        </Dropdown.Item>
      </React.Fragment>
    ));
    // }
  }
}
export default DemoChild;
