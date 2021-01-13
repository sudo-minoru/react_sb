import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import "semantic-ui-css/semantic.min.css";
import RaceSearchButton from "./button/RaceSearchButton";

export const button = {
  id: "1",
  title: "button",
};

export const actions = {
  onClick: action("onClick"),
};

storiesOf("Buttons", module).add("RaceSearchButton", () => (
  <RaceSearchButton {...actions} />
));
