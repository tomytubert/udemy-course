import React from "react";
import EventListItem from "./EventListItem";

const EventsList = ({ events }) => {
  return (
    <>
      {events.map((event) => {
        return (
          <EventListItem
            event={event}
            key={event.id}
          />
        );
      })}
    </>
  );
};

export default EventsList;
