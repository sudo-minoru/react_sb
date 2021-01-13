import React from "react";
import RaceSearchButton from "./components/atoms/button/RaceSearchButton";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <RaceSearchButton></RaceSearchButton>
      </header>
    </div>
  );
}

export default App;
