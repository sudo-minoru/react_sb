import React from "react";
import "semantic-ui-css/semantic.min.css";
import RaceSearchText from "./RaceSearchText";

const RaceSearchTextStories = {
  component: RaceSearchText,
  title: "RaceSearchText",
};

export default RaceSearchTextStories;

export const Default = (args: any) => <RaceSearchText {...args} />;
