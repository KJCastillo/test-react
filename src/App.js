import './App.css';
import { useState } from 'react';

function App() {
  const [events, setEvents] = useState([
    {title: 'study', id: 1},
    {title: 'work', id: 2},
    {title: 'fitness', id: 3}
  ]) 

  const handleClick = (id) => {
    setEvents(events.filter((event) => {
      return id !== event.id
    }))
    console.log(id)
  }

  return (
    <div className="App">
      
      {events.map((event, index) => (
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
