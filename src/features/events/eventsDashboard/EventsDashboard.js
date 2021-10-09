import React from "react";
import EventsList from "./EventsList";
import {useSelector} from 'react-redux';
const { Grid } = require("semantic-ui-react");

const EventsDashboard = () => {

const {events} = useSelector(state => state.event);
  return (
    <>
      <Grid>
        <Grid.Column width={10}>
          <EventsList events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
         <h3>Event Filters</h3>
        </Grid.Column>
      </Grid>
    </>
  );
};

export default EventsDashboard;
