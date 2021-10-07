import React from "react";
import {
  Segment,
  Item,
  ItemDescription,
  Icon,
  List,
  Button,
} from "semantic-ui-react";
import EventListAttendee from "./EventListAttendee";
import { Link } from "react-router-dom";

const EventListItem = ({ event, handleSelectedEvent,handleDeletEvent }) => {
  return (
    <>
      <Segment.Group>
        <Segment>
          <Item.Group>
            <Item>
              <Item.Image size="tiny" src={event.hostPhotoURL} />
              <Item.Content>
                <Item.Header content={event.title} />
                <ItemDescription>Hosted by {event.hostedBy}</ItemDescription>
              </Item.Content>
            </Item>
          </Item.Group>
        </Segment>
        <Segment>
          <span>
            <Icon name="clock" />
            {event.date}
            <Icon name="marker" />
            {event.venue}
          </span>
        </Segment>
        <Segment secondary>
          <List horizontal>
            {event.attendees.map((attendee) => {
              return (
                <EventListAttendee attendee={attendee} key={attendee.id} />
              );
            })}
          </List>
        </Segment>
        <Segment clearing>
          <div>{event.description}</div>
          <Button
            color="red"
            floated="right"
            content="Delete"
            onClick={() => handleDeletEvent(event.id)}
          />
          <Button as={Link} to={`/events/${event.id}`}
            color="teal"
            floated="right"
            content="view"
          />
        </Segment>
      </Segment.Group>
    </>
  );
};

export default EventListItem;
