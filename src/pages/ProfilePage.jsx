// src/pages/ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import '../styles/ProfilePage.css';

const ProfilePage = () => {
  const [userData, setUserData] = useState({ email: '', password: '' });

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUserData(storedUser);
    }
  }, []);

  return (
    <div className="profile-page p-6">
      <h2 className="text-3xl font-bold mb-4">User Profile</h2>
      <div className="profile-card bg-white p-6 rounded-lg shadow-lg">
        <div className="profile-image-container">
          <img
            src="../public/assets/profile.jpg" 
            alt="User Avatar"
            className="profile-avatar rounded-full w-24 h-24 mb-4"
          />
        </div>
        <div className="profile-info">
          <p className="text-lg"><strong>Email:</strong> {userData.email}</p>
          <p className="text-lg"><strong>Password:</strong> {userData.password}</p> 
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
