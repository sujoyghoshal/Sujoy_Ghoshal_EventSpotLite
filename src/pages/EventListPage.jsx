import React, { useState } from "react";
import events from "../data/events";
import EventCard from "../components/EventCard";
import EventModal from "../components/EventModal";
import "../styles/EventListPage.css";

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
            <h2 className="animated-heading">Upcoming Events</h2>
            <div className="events-grid grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
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
