import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AutoCompleteText } from "./AutoComplete/AutoCompleteText";
import { countries } from "./countries";
import { getAllCountries } from "./api/apiCountries";
import { AutoCompelteUseState } from "./features/AutoCompelteUseState/AutoCompelteUseState";

function App() {
  return (
    <div className="App">
      <div className="App-Component">
        <AutoCompelteUseState />
      </div>
    </div>
  );
}

export default App;
