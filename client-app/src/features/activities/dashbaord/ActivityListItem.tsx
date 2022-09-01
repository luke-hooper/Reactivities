import { format } from "date-fns";
import React from "react";
import { Link } from "react-router-dom";
import {
  Button,
  Icon,
  Item,
  ItemContent,
  ItemDescription,
  ItemHeader,
  ItemImage,
  Segment,
  SegmentGroup,
} from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activity: Activity;
}

export default function ActivityListItem({ activity }: Props) {
  return (
    <SegmentGroup>
      <Segment>
        <Item.Group>
          <Item>
            <ItemImage size='tiny' circular src='/assets/user.png' />
            <ItemContent>
              <ItemHeader as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </ItemHeader>
              <ItemDescription>Hosted by Me!</ItemDescription>
            </ItemContent>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name='clock' /> {format(activity.date!, "dd MMM yyyy h:mm aa")}
          <Icon name='marker' /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendies go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          color='teal'
          floated='right'
          content='View'
        />
      </Segment>
    </SegmentGroup>
  );
}
