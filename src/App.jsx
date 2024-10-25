// src/App.jsx
import React from 'react';
import EventListPage from './pages/EventListPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="flex flex-col min-h-screen"> {/* Flexbox container with minimum height */}
    <Header />
    <main className="flex-grow"> {/* Main content area that grows */}
      <EventListPage />
    </main>
    <Footer />
  </div>
);

export default App;


