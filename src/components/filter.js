import React, { Component } from "react";
import Dropdown from "../../node_modules/react-bootstrap/Dropdown";
import FormControl from "../../node_modules/react-bootstrap/FormControl";
import DemoChild from "./DemoChild";
import data from "../data/users.json";
// import "./App.css";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: "",
      countries: [
        { id: 1, label: "Singapore" },
        { id: 2, label: "Malaysia" },
        { id: 3, label: "Indonesia" },
        { id: 4, label: "Philippines" },
        { id: 5, label: "Thailand" },
      ],
      visible: [],
      n: 3,
      authority: "user",
    };
  }

  handleSearchQuery = (event) => {
    this.setState({ searchQuery: event.target.value });
  };

  resetInputField = () => {
    this.setState({ searchQuery: "" });
  };

  handleAdd = () => {
    console.log(this.state.searchQuery);
    this.setState({
      countries: [
        ...this.state.countries,
        { id: this.state.countries.length + 1, label: this.state.searchQuery },
      ],
    });
  };

  render() {
    const max = this.state.countries.length;
    const remaining = max - this.state.n;

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

    for (let i = 0; i < this.state.n; i++) {
      this.state.visible[i] = this.state.countries[i];
    }

    const { searchQuery } = this.state;
    const options = [...this.state.visible];
    const filteredOptions = options.filter(
      (option) =>
        option.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
        !searchQuery
    );

    const logItem = (val) => {
      console.log(val);
    };

    const userdata = [...data];

    const validate = () => {
      var username = document.getElementsByName("username")[0].value;
      var password = document.getElementsByName("password")[0].value;
      document.getElementsByName("username")[0].value = "";
      document.getElementsByName("password")[0].value = "";

      var admin = userdata[0];
      if (username === admin.username && password === admin.password) {
        this.setState({ authority: "admin" }, () => {
          console.log(this.state.authority);
        });
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

          <label for="username">Username</label>
          <input
            type="text"
            name="username"
            className="form-control form-control-sm"
          />
          <br />
          <label for="password">Password </label>
          <input
            type="password"
            name="password"
            className="form-control form-control-sm"
          />

          <br />
          <button
            class="btn btn-primary btn-sm"
            type="submit"
            value="Submit"
            onClick={validate}
          >
            Login
          </button>
        </div>

        <Dropdown>
          <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
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
              placeholder="Type to filter..."
              onChange={this.handleSearchQuery}
              value={searchQuery}
            />
            {filteredOptions.length > 0 ? (
              filteredOptions.map((option, index) => {
                if (index !== this.state.n - 1) {
                  return (
                    <Dropdown.Item
                      key={index}
                      onClick={logItem.bind(this, option.label)}
                    >
                      {option.label}
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
                      {option.label}{" "}
                      <span id="expand" onClick={handleExpansion}>
                        {remaining} more...
                      </span>
                    </Dropdown.Item>
                  );
                }
              })
            ) : (
              <Dropdown.Item>
                "{searchQuery}" not found{" "}
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
