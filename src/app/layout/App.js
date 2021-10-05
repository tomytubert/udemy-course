import React,{useState} from 'react';
import EventsDashboard from '../../features/events/eventsDashboard/EventsDashboard';
import './style.css';
import Navbar from '../../features/nav/Navbar';
import { Container } from 'semantic-ui-react';

function App() {

  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="App">
     <Navbar setFormOpen={setFormOpen}/>  
     <Container className="main">
       <EventsDashboard formOpen={formOpen} setFormOpen={setFormOpen}/>
    </Container>
     
   
    </div>
  );
}

export default App;
