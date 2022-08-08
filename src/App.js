import './App.css';
import { useState } from 'react';

function App() {
  
  const [name, setName] = useState('Kevin')

  const handleClick = () => {
    setName('Penny')
    console.log(name)
  }

  return (
    <div className="App">
      <h1>my name is {name}</h1>
      <button onClick={handleClick}>change name</button>
    </div>
  );
}

export default App;
