import React from "react";
import "semantic-ui-css/semantic.min.css";
import RaceSearchButton from "./RaceSearchButton";

const RaceSearchButtonStories = {
  component: RaceSearchButton,
  title: "RaceSearchButton",
};

export default RaceSearchButtonStories;

export const Default = (args: any) => <RaceSearchButton {...args} />;
