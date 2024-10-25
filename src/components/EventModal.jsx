// src/components/EventModal.jsx
import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const EventModal = ({ event, isOpen, onRequestClose }) => (
  <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    className="bg-white p-6 rounded-lg max-w-lg mx-auto"
    overlayClassName="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center"
  >
    <h2 className="text-3xl font-bold mb-4">{event.name}</h2>
    <p className="mb-2"><strong>Event Date:</strong> {event.date}</p>
    <p className="mb-2"><strong>Event Place:</strong> {event.location}</p>
    <p className="mb-4">{event.description}</p>
    <button onClick={onRequestClose} className="mt-4 bg-blue-600 text-white py-2 px-4 rounded">
      Close
    </button>
  </Modal>
);

export default EventModal;
