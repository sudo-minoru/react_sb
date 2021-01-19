import React from "react";
import { Container, Divider, Header } from "semantic-ui-react";
import RaceSearchButton from "./components/atoms/button/RaceSearchButton";
import RaceSearchText from "./components/atoms/text/RaceSearchText";
import "semantic-ui-css/semantic.min.css";
import "./App.css";

function App() {
  return (
    <Container>
      <Divider hidden />
      <Header>StoryBook Sample</Header>
      <div>
        <RaceSearchText />
        <RaceSearchButton />
      </div>
    </Container>
  );
}

export default App;
