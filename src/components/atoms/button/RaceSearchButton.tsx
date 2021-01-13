import React from "react";
import { Button, Icon } from "semantic-ui-react";

interface RaceSearchButtonProps {
  onClick?: () => void;
}

const RaceSearchButton: React.FC<RaceSearchButtonProps> = ({ onClick }) => (
  <div>
    <Button icon labelPosition="left" onClick={onClick}>
      <Icon name="search plus" />
      大会検索
    </Button>
  </div>
);

export default RaceSearchButton;
