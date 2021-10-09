import React from "react";
import EventsDashboard from "../../features/events/eventsDashboard/EventsDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/eventDetailedPage";
import EventForm from "../../features/events/eventsForm/EventsForm";
import "./style.css";
import Navbar from "../../features/nav/Navbar";
import { Container } from "semantic-ui-react";
import { Route, useLocation } from "react-router-dom";
import Home from "../../features/home/home";
import Sandbox from "../../features/sandbox/Sandbox";

function App() {
  const {key} = useLocation(); //Al utilizar el mismo componente como form, con la key detecta que es distinto así puedo utilizarlo par update & create
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
              <Route exact path="/sandbox" component={Sandbox} />
              <Route exact path="/events/:id" component={EventDetailedPage} />
              <Route exact path={["/create-event","/manage/:id"]} component={EventForm} key={key} />
            </Container>
          </>
        )}
      />
    </div>
  );
}

export default App;
