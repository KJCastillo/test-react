import "./App.css";
import Title from "./components/Title";
import Modal from "./components/Modal";
import EventList from "./components/EventList";
import { useState } from "react";
import NewEventForm from "./components/NewEventForm";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [showEvents, setShowEvents] = useState(true);
  const [events, setEvents] = useState([
    { title: "study", id: 1 },
    { title: "work", id: 2 },
    { title: "fitness", id: 3 },
  ]);

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id;
      });
    });
    console.log(id);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  return (
    <div className="App">
      <Title title="Events testing" />

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      {showEvents && <EventList events={events} handleClick={handleClick}/>        }

      {showModal && (
        <Modal handleClose={handleClose}>
          <NewEventForm />
        </Modal>
      )}
      <div>
        <button
          onClick={() => {
            setShowModal(true);
          }}
        >
         Add New Event
        </button>
      </div>
    </div>
  );
}

export default App;
