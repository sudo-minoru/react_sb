import React from "react";
import { Button, Icon } from "semantic-ui-react";
import PropTypes from "prop-types";

interface RaceSearchButtonProps {
  onClick?: () => void;
  loading?: boolean;
}

const RaceSearchButton: React.FC<RaceSearchButtonProps> = ({
  onClick,
  loading,
}) => (
  <div style={{ display: "inline-block" }}>
    <Button icon labelPosition="left" onClick={onClick} loading={loading}>
      <Icon name="search plus" />
      大会検索
    </Button>
  </div>
);

RaceSearchButton.propTypes = {
  onClick: PropTypes.func,
  loading: PropTypes.bool,
};
RaceSearchButton.defaultProps = {
  onClick: () => {},
  loading: false,
};

export default RaceSearchButton;
