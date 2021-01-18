import React from "react";
import { Input } from "semantic-ui-react";
import PropTypes from "prop-types";

const RaceSearchText = ({ text = "" }) => (
  <Input focus placeholder="〇〇を入力..." defaultValue={text} />
);

RaceSearchText.propTypes = {
  text: PropTypes.string,
};

RaceSearchText.defaultProps = {
  text: "",
};

export default RaceSearchText;
