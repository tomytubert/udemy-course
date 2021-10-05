import React,{useState} from 'react';
import EventsList from './EventsList';
import EventsForm from "../eventsForm/EventsForm";
import {sampleData} from "../../../app/api/sampleData";

const { Grid } = require("semantic-ui-react")

const EventsDashboard = ({formOpen,setFormOpen}) => {
    const [events, setEvents] = useState(sampleData);
    return ( 
    <>
        <Grid>
            <Grid.Column width={10}>
                <EventsList events={events}/>
            </Grid.Column>
            <Grid.Column width={6}>
                {formOpen && <EventsForm setFormOpen={setFormOpen}/>}
            </Grid.Column>
        </Grid>
    </> 
    );
}
 
export default EventsDashboard;