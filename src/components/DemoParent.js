import React, { Component } from "react";
import DemoChild from "./DemoChild";
import Dropdown from "../../node_modules/react-bootstrap/Dropdown";
import FormControl from "../../node_modules/react-bootstrap/FormControl";

class DemoParent extends Component {
  state = {
    countries: [
      { id: 1, value: "Singapore" },
      { id: 2, value: "Malaysia" },
      { id: 3, value: "Thailand" },
      { id: 4, value: "Cambodia" },
      { id: 5, value: "Hawaii" },
      { id: 6, value: "Japan" },
    ],
    // Vcountries: [
    //   { id: 1, value: "Singapore" },
    //   { id: 2, value: "Malaysia" },
    //   { id: 3, value: "Thailand" },
    //   { id: 4, value: "Cambodia" },
    //   { id: 5, value: "Hawaii" },
    //   { id: 6, value: "Japan" },
    // ],
    searchQuery: "",
  };

  //   handle event and change state
  //   handleChange = (val, visibleCountries) => {
  //     console.log(
  //       this.state.countries.filter((country) =>
  //         country.value.toLowerCase().includes(val)
  //       )
  //     );

  //     this.setState({
  //       Vountries: this.state.Vcountries.filter((country) =>
  //         country.value.toLowerCase().includes(val)
  //       ),
  //     });
  //     console.log(this.state.Vcountries);
  //   };

  handleChange = (event) => {
    this.setState({ searchQuery: event });
  };

  handleEvent = (event, eventKey) => {
    console.log(event);
  };

  render() {
    const max = this.state.countries.length;
    const n = 3;
    // let visibleCountries = [];
    // for (let i = 0; i < n; i++) {
    //   visibleCountries.push(this.state.countries[i]);
    // }

    let filteredOptions = [];
    const options = [
      { id: 1, value: "Singapore" },
      { id: 2, value: "Malaysia" },
      { id: 3, value: "Thailand" },
      { id: 4, value: "Cambodia" },
      { id: 5, value: "Hawaii" },
      { id: 6, value: "Japan" },
    ];

    filteredOptions = (searchQuery) =>
      options.filter(
        (option) =>
          option.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
          !searchQuery
      );

    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Select a location
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <FormControl
            autoFocus
            className="mx-3 my-2 w-auto"
            placeholder="Type to filter..."
            onChange={(e) => {
              //   this.handleChange(e.target.value, visibleCountries)
              this.handleChange(e.target.value);
              //   setValue(e.target.value);
              //   handleChange(e.target.value);
            }}
            value={this.state.searchQuery}
          />

          {/* <DemoChild
            handleEvent={this.handleEvent}
            countries={filteredOptions}
          /> */}
          {/* <div>
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => {
                return <div key={index}>{option.value}</div>;
              })
            ) : (
              <div>No results found for {this.state.searchQuery}</div>
            )}
          </div> */}
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

export default DemoParent;
