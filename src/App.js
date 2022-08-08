import './App.css';
import { useState } from 'react';

function App() {
  
  const [name, setName] = useState('Kevin')
  const [events, setEvents] = useState([
    {title: 'study', id: 1},
    {title: 'work', id: 2},
    {title: 'fitness', id: 3}
  ]) 

  const handleClick = () => {
    setName('Penny')
    console.log(name)
  }

  return (
    <div className="App">
      <h1>my name is {name}</h1>
      <button onClick={handleClick}>change name</button>
      {events.map((event) => (
        <div key={event.id}>
          <h2>
            {event.title}
          </h2>
        </div>
      ))}
    </div>
  );
}

export default App;
