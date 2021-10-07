import React from 'react';
import EventListItem from './EventListItem';

const EventsList = ({events,handleSelectedEvent,handleDeletEvent}) => {
    return ( 
        <>
          {events.map(event => { 
            return <EventListItem event={event} key={event.id} handleSelectedEvent={handleSelectedEvent} handleDeletEvent={handleDeletEvent}/>
          })}
        </>
     );
}
 
export default EventsList;