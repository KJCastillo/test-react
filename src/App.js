import './App.css';
import { useState } from 'react';

function App() {
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: 'study', id: 1},
    {title: 'work', id: 2},
    {title: 'fitness', id: 3}
  ]) 

  const handleClick = (id) => {
   setEvents((prevEvents) => {
    return prevEvents.filter((event) => {
      return id !== event.id
    })
   })
    console.log(id)
  }

  return (
    <div className="App">
      <div>
        <button onClick={() => setShowEvents(false)}>hide events</button>
      </div>
      <div>
        <button onClick={() => setShowEvents(true)}>show events</button>
      </div>
      {showEvents && events.map((event, index) => (
        <div key={event.id}>
          <h2>{index} - 
            {event.title} 
            <button onClick={() => {handleClick(event.id)}}>delete event</button>
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
