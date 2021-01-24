import { Segment } from "semantic-ui-react";
import PropTypes from "prop-types";

const RaceSearchSegment = ({ text = "" }) => (
  <Segment.Group horizontal>
    <Segment>Top</Segment>
    <Segment>Middle</Segment>
    <Segment>Bottom</Segment>
  </Segment.Group>
);

RaceSearchSegment.propTypes = {
  text: PropTypes.string,
};

RaceSearchSegment.defaultProps = {
  text: "",
};

export default RaceSearchSegment;
