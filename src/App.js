import React from "react";
import Dropdown from "./components/ButtonContainer";
import DropdownButton from "./components/DropdownButton";
import Parent from "./components/Parent";
import DemoParent from "./components/DemoParent";
import Filter from "./components/filter";

import "./App.css";

function App() {
  return (
    <div id="App" style={{ display: "flex", flexDirection: "row" }}>
      {/* <Dropdown /> */}
      {/* <DropdownButton />
      <Parent /> */}
      {/* <DemoParent /> */}
      <Filter />
    </div>
  );
}

export default App;
