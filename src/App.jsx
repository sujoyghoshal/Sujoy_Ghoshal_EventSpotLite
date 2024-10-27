import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Loader from './components/Loader';
import EventListPage from './pages/EventListPage';
import SignupForm from './components/SignupForm';
import LoginForm from './components/LoginForm';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const authStatus = localStorage.getItem('isAuthenticated');
    if (authStatus === 'true') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem('isAuthenticated', 'true'); // Save authentication state
    navigate('/events');  // Navigate to /events after login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('isAuthenticated'); // Clear authentication state
    navigate('/login');
  };

  return (
    <div className="flex flex-col min-h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <Header onLogout={handleLogout} isAuthenticated={isAuthenticated} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Navigate to="/signup" />} />
              <Route path="/signup" element={<SignupForm />} />
              <Route path="/login" element={<LoginForm onLogin={handleLogin} />} />
              <Route 
                path="/events" 
                element={isAuthenticated ? <EventListPage /> : <Navigate to="/login" />}
              />
            </Routes>
          </main>
          <Footer />
        </>
      )}
    </div>
  );
};

const AppWrapper = () => (
  <Router>
    <App />
  </Router>
);

export default AppWrapper;
