import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/esm/Dropdown";
import FormControl from "react-bootstrap/esm/FormControl";

class Child extends React.Component {
  render() {
    // return <p>{this.props.country}</p>;
    return (
      <Dropdown.Item
        eventKey={this.props.country.value}
        id={this.props.country.id}
        onSelect={handleSelect}
      >
        {this.props.country.value}
      </Dropdown.Item>
    );
  }
}

const handleSelect = (e) => {
  console.log(e);
};

export default Child;
