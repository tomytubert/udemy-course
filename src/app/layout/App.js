import React from "react";
import EventsDashboard from "../../features/events/eventsDashboard/EventsDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/eventDetailedPage";
import EventForm from "../../features/events/eventsForm/EventsForm";
import "./style.css";
import Navbar from "../../features/nav/Navbar";
import { Container } from "semantic-ui-react";
import { Route } from "react-router-dom";
import Home from "../../features/home/home";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route
        path={"/(.+)"}//exclude home with navbar
        render={() => (
          <>
            <Navbar />
            <Container className="main">
              <Route exact path="/events" component={EventsDashboard} />
              <Route exact path="/events/:id" component={EventDetailedPage} />
              <Route exact path={["/create-event","manage/:id"]} component={EventForm} />
            </Container>
          </>
        )}
      />
    </div>
  );
}

export default App;
