import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "react-bootstrap/esm/Dropdown";
import FormControl from "react-bootstrap/esm/FormControl";

class ChildLast extends React.Component {
  render() {
    // return <p>{this.props.country}</p>;
    return (
      <Dropdown.Item
        eventKey={this.props.country.value}
        id={this.props.country.id}
        onSelect={handleSelect}
      >
        {this.props.country.value}
        <span style={{ fontSize: "10px", float: "right", padding: "10px" }}>
          {this.props.max} more . . .
        </span>
      </Dropdown.Item>
    );
  }
}

const handleSelect = (e) => {};

export default ChildLast;
