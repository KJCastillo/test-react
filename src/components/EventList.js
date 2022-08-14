import React from "react";
import "./NewEventForm.css"

export default function EventList({ events, handleClick }) {
  return (
    <div className="card">
      {events.map((event, index) => (
        <React.Fragment key={event.id}>
          <h2 className="container">
            {index} - {event.title}
          </h2>
          <button onClick={() => handleClick(event.id)}>delete event</button>
        </React.Fragment>
      ))}
    </div>
  );
}