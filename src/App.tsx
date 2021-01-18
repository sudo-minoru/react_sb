import React from "react";
import RaceSearchButton from "./components/atoms/button/RaceSearchButton";
import RaceSearchText from "./components/atoms/text/RaceSearchText";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RaceSearchText />
        <RaceSearchButton></RaceSearchButton>
      </header>
    </div>
  );
}

export default App;
