import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Icon, Segment } from "semantic-ui-react";

export default function NotFound() {
  return (
    <Segment placeholder>
      <Header icon>
        <Icon name='search' /> Ooops we looked everywhere and could not find
        this!
      </Header>
      <Segment.Inline>
        <Button as={Link} to='/activities' primary>
          Retrn to Activities
        </Button>
      </Segment.Inline>
    </Segment>
  );
}
