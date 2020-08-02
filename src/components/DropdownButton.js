import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "../../node_modules/react-bootstrap/Dropdown";
import FormControl from "../../node_modules/react-bootstrap/FormControl";
import Child from "./Child";
import ChildLast from "./ChildLast";

class DropdownButton extends React.Component {
  //   state = {
  //     countries: [{ id: 1, country: "Singapore", id: 2, country: "Malaysia" }],
  //   };
  state = {
    countries: [
      { id: 1, value: "Singapore" },
      { id: 2, value: "Malaysia" },
    ],
  };

  render() {
    const max = this.state.countries.length;
    const n = 1;
    let visibleCountries = [];
    let search = "";
    for (let i = 0; i < n; i++) {
      visibleCountries.push(this.state.countries[i]);
    }

    const filteredOptions = this.state.countries.filter(
      (country) =>
        country.value.toLowerCase().includes(search.toLowerCase()) || !search
    );

    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Select a location
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          {
            /* <Dropdown.Item eventKey="Red" onSelect={handleSelect}>
            Red
          </Dropdown.Item>
          <Dropdown.Item eventKey="Blue" onSelect={handleSelect}>
            Blue
          </Dropdown.Item>
          <Dropdown.Item eventKey="Orange" onSelect={handleSelect}>
            Orange
          </Dropdown.Item>
          <Dropdown.Item eventKey="Red-Orange" onSelect={handleSelect}>
            Red-Orange
          </Dropdown.Item> */

            // this.state.countries.map((country, index) =>
            //   country.id !== this.state.countries.length ? (
            //     <Child key={index} country={country} />
            //   ) : (
            //     <ChildLast key={country.id} country={country} max={max} />
            //   )
            // )

            visibleCountries.map((country, index) =>
              country.id !== visibleCountries.length ? (
                <Child key={index} country={country} />
              ) : (
                <ChildLast key={country.id} country={country} max={max} />
              )
            )
          }
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

const handleSelect = (e) => {
  console.log(e);
};

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

const handleChange = (value) => {
  this.props.search = value;
};
// forwardRef again here!
// Dropdown needs access to the DOM of the Menu to measure it
const CustomMenu = React.forwardRef(
  ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
    const [value, setValue] = React.useState("");

    return (
      <div
        ref={ref}
        style={style}
        className={className}
        aria-labelledby={labeledBy}
      >
        <FormControl
          autoFocus
          className="mx-3 my-2 w-auto"
          placeholder="Type to filter..."
          onChange={(e) => {
            setValue(e.target.value);
            handleChange(e.target.value);
          }}
        />
        <ul className="list-unstyled">
          {React.Children.toArray(children).filter(
            (child) =>
              !value ||
              child.props.country.value.toLowerCase().startsWith(value)
          )}
        </ul>
      </div>
    );
  }
);

export default DropdownButton;
