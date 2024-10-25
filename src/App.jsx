// src/App.jsx
import React, { useState, useEffect } from 'react';
import EventListPage from './pages/EventListPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Simulating a loading time of 3 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <main className="flex-grow">
            <EventListPage />
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

export default App;
