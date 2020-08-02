import React from "react";
import Dropdown from "../../node_modules/react-bootstrap/Dropdown";
import FormControl from "../../node_modules/react-bootstrap/FormControl";
import "bootstrap/dist/css/bootstrap.css";
import data from "../data/users.json";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: "",
      countries: [
        { id: 1, value: "Singapore" },
        { id: 2, value: "Malaysia" },
        { id: 3, value: "Indonesia" },
        { id: 4, value: "Philippines" },
        { id: 5, value: "Thailand" },
      ],
      visible: [],
      n: 3,
      authority: "user",
    };
  }

  // Changes query state when user enters a character into search box
  handleSearchQuery = (event) => {
    this.setState({ query: event.target.value });
  };

  // Adds new country object into state
  handleAdd = () => {
    this.setState({
      countries: [
        ...this.state.countries,
        { id: this.state.countries.length + 1, value: this.state.query },
      ],
    });
  };

  render() {
    const max = this.state.countries.length;
    const remaining = max - this.state.n;

    // Handles event when user clicks on span to
    // ignore country view limit set by state property 'n'
    // to view all countries
    const handleExpansion = () => {
      this.setState(
        {
          visible: [],
        },
        this.setState({
          visible: [...this.state.countries],
          n: max,
        })
      );
    };

    // Set visible countries to the user
    for (let i = 0; i < this.state.n; i++) {
      this.state.visible[i] = this.state.countries[i];
    }

    const { query } = this.state;
    const countries = [...this.state.visible];

    // Create filtered array based on query
    const filteredCountries = countries.filter(
      (country) =>
        country.value.toLowerCase().includes(query.toLowerCase()) || !query
    );

    // Function to log value of menu item upon click
    const logItem = (val) => {
      console.log(val);
    };

    // Getting admin login details from users.json
    const userdata = [...data];

    // Simulate validation of login for admin privileges
    const validate = () => {
      var username = document.getElementsByName("username")[0].value;
      var password = document.getElementsByName("password")[0].value;
      document.getElementsByName("username")[0].value = "";
      document.getElementsByName("password")[0].value = "";

      var admin = userdata[0];
      if (username === admin.username && password === admin.password) {
        this.setState({ authority: "admin" }, () => {});
      }
    };

    return (
      <React.Fragment>
        <div
          style={{
            height: "500px",
            maxWidth: "500px",
            margin: "auto 10px",
            flex: "1",
          }}
        >
          <p>Default authority is normal user</p>
          <p>Login as admin using</p>
          <p>
            username : <em>admin</em>
          </p>
          <p>
            password : <em>admin</em>
          </p>

          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control form-control-sm"
          />
          <br />
          <label htmlFor="password">Password </label>
          <input
            type="password"
            name="password"
            className="form-control form-control-sm"
          />

          <br />
          <button
            className="btn btn-primary btn-sm"
            type="submit"
            value="Submit"
            onClick={validate}
          >
            Login
          </button>
        </div>

        <Dropdown>
          <Dropdown.Toggle id="dropdown-custom-components">
            Select a location
          </Dropdown.Toggle>
          {this.state.authority === "admin" && (
            <span style={{ margin: "10px" }}>
              <em>Logged in as admin</em>
            </span>
          )}
          <Dropdown.Menu>
            <FormControl
              autoFocus
              type="text"
              className="mx-3 my-2 w-auto"
              placeholder="Search..."
              onChange={this.handleSearchQuery}
              value={query}
            />
            {filteredCountries.length > 0 ? (
              filteredCountries.map((option, index) => {
                if (index !== this.state.n - 1) {
                  return (
                    <Dropdown.Item
                      key={index}
                      onClick={logItem.bind(this, option.value)}
                    >
                      {option.value}
                    </Dropdown.Item>
                  );
                } else {
                  return (
                    <Dropdown.Item
                      key={index}
                      onClick={(e) => {
                        logItem(e.target.value);
                      }}
                    >
                      {option.value}{" "}
                      <span id="expand" onClick={handleExpansion}>
                        {remaining} more...
                      </span>
                    </Dropdown.Item>
                  );
                }
              })
            ) : (
              <Dropdown.Item>
                "{query}" not found{" "}
                {this.state.authority === "admin" && (
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={this.handleAdd}
                  >
                    Add & Select
                  </button>
                )}
              </Dropdown.Item>
            )}
          </Dropdown.Menu>
        </Dropdown>
      </React.Fragment>
    );
  }
}

export default Filter;
