import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Dropdown from "../../node_modules/react-bootstrap/Dropdown";
import FormControl from "../../node_modules/react-bootstrap/FormControl";
import Child from "./Child";
import ChildLast from "./ChildLast";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      countries: [
        { id: 1, value: "Singapore" },
        { id: 2, value: "Malaysia" },
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
    const n = 1;
    let visibleCountries = [];
    for (let i = 0; i < n; i++) {
      visibleCountries.push(this.state.countries[i]);
    }

    const { searchQuery } = this.state;
    const options = [
      { label: "react" },
      { label: "angular" },
      { label: "vue" },
    ];
    const filteredOptions = this.state.countries.filter(
      (country) =>
        country.value.toLowerCase().includes(searchQuery.toLowerCase()) ||
        !searchQuery
    );
    return (
      <Dropdown>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          Select a location
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu} method={this.handleSearchQuery}>
          {filteredOptions.length > 0 ? (
            filteredOptions.map((country, index) => {
              return <div key={index}>{country.value}</div>;
            })
          ) : (
            <div>No results found for {searchQuery}</div>
          )}
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

const CustomMenu = React.forwardRef(
  (
    { children, style, className, "aria-labelledby": labeledBy },
    ref,
    props
  ) => {
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
          }}
        />

        {/* <input type="text" onChange={(e) => setValue(e.target.value)} /> */}
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

export default App;
