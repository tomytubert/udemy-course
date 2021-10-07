import React, { useState } from "react";
import EventsList from "./EventsList";
import { sampleData } from "../../../app/api/sampleData";

const { Grid } = require("semantic-ui-react");

const EventsDashboard = () => {
  const [events, setEvents] = useState(sampleData);

  // const handleCreateEvent = (event) => {
  //   setEvents([...events, event]);
  // };

  // const handleUpdateEvent = (updatedEvent) => {
  //   setEvents(events.map(event => { if(event.id === updatedEvent.id){return updatedEvent }else{return event}}))
  //   setSelectedEvent(null);
  // }

  const handleDeletEvent = (eventId) => {
      setEvents(events.filter(event => event.id !== eventId))
  }

  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventsList events={events} handleDeletEvent={handleDeletEvent} />
        </Grid.Column>
        <Grid.Column width={6}>
         <h3>Event Filters</h3>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EventsDashboard;
