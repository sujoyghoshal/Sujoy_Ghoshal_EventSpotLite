// src/pages/EventListPage.jsx
import React, { useState } from "react";
import events from "../data/events"; // Ensure this file has the event data
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";

const EventListPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleCardClick = (event) => {
    setSelectedEvent(event);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedEvent(null);
  };

  return (
    <div className="p-4">
      <h2 className="text-3xl font-bold mb-4 text-center text-blue-600">Upcoming Events</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onClick={handleCardClick} />
        ))}
      </div>
      {selectedEvent && (
        <EventModal
          event={selectedEvent}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
        />
      )}
    </div>
  );
};

export default EventListPage;
