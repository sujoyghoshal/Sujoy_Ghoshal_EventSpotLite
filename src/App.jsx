// src/App.jsx
import React from 'react';
import EventListPage from './pages/EventListPage';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => (
  <div className="flex flex-col min-h-screen"> 
    <Header />
    <main className="flex-grow">
      <EventListPage />
    </main>
    <Footer />
  </div>
);

export default App;


