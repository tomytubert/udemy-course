import React, { useState } from "react";
import { Segment, Header, Form, Button } from "semantic-ui-react";
import ciud from "cuid";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { updateEvent, createEvent } from "../eventActions";
const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((e) => e.id === match.params.id)
  );
  const initialState = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialState);

  const handleChange = ({ target }) => {
    setValues({ ...values, [target.name]: target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: ciud(),
            hostedBy: "Bob",
            attendees: [],
          })
        );
    history.push("/events");
  };

  return (
    <>
      <Segment clearing>
        <Header
          content={selectedEvent ? "Editing Event" : "Create new Event"}
        />
        <Form onSubmit={handleSubmit}>
          <Form.Field>
            <input
              type="text"
              value={values.title}
              placeholder="Event title"
              name="title"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              value={values.category}
              placeholder="Category"
              name="category"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              value={values.description}
              placeholder="Description"
              name="description"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              value={values.city}
              placeholder="City"
              name="city"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="text"
              value={values.venue}
              placeholder="Venue"
              name="venue"
              onChange={handleChange}
            />
          </Form.Field>
          <Form.Field>
            <input
              type="date"
              value={values.date}
              placeholder="Date"
              name="date"
              onChange={handleChange}
            />
          </Form.Field>
          <Button type="submit" floated="right" positive content="Submit" />
          <Button
            as={Link}
            to={"/events"}
            type="submit"
            floated="right"
            content="Cancel"
          />
        </Form>
      </Segment>
    </>
  );
};

export default EventForm;
