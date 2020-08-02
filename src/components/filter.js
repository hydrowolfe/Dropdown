import React, { Component } from "react";
import Dropdown from "../../node_modules/react-bootstrap/Dropdown";
import FormControl from "../../node_modules/react-bootstrap/FormControl";
import DemoChild from "./DemoChild";
// import "./App.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      countries: [
        { id: 1, label: "Singapore" },
        { id: 2, label: "Malaysia" },
        { id: 3, label: "Thailand" },
        { id: 4, label: "Cambodia" },
        { id: 5, label: "Hawaii" },
        { id: 6, label: "Japan" },
      ],
    };
  }
  handleSearchQuery = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  resetInputField = () => {
    this.setState({ searchQuery: "" });
  };

  render() {
    const max = this.state.countries.length;
    let n = 3;
    const remaining = max - n;

    const handleExpansion = () => {
      visibleCountries = [...this.state.countries];
    };

    let visibleCountries = [];
    for (let i = 0; i < n; i++) {
      visibleCountries.push(this.state.countries[i]);
    }

    const { searchQuery } = this.state;
    const options = [...visibleCountries];
    const filteredOptions = options.filter(
      (option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        !searchQuery
    );
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Select a location
        </Dropdown.Toggle>
        <Dropdown.Menu>
          {/* <input
            type="text"
            onChange={this.handleSearchQuery}
            value={searchQuery}
          /> */}
          <FormControl
            autoFocus
            type="text"
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={this.handleSearchQuery}
            value={searchQuery}
          />
          {/* <DemoChild key={filteredOptions.id} countries={filteredOptions}> */}
          {filteredOptions.length > 0 ? (
            filteredOptions.map((option, index) => {
              if (index !== n - 1) {
                return (
                  <Dropdown.Item key={index}>{option.label}</Dropdown.Item>
                );
              } else {
                return (
                  <Dropdown.Item key={index}>
                    {option.label}{" "}
                    <span id="expand" onClick={handleExpansion}>
                      {remaining} more...
                    </span>
                  </Dropdown.Item>
                );
              }
            })
          ) : (
            <Dropdown.Item>No results found for {searchQuery} </Dropdown.Item>
          )}
          {/* </DemoChild> */}
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
  <a
    href=""
    ref={ref}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    &#x25bc;
  </a>
));
export default Filter;
