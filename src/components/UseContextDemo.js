import React, { createContext, useContext, useState } from 'react';

const UserContext = createContext();

const UserProfile = () => {
  const { user, setUser } = useContext(UserContext);

  return (
    <div className="profile-container">
      <h3>User Profile</h3>
      <p>Name: <span className="user-name">{user.name}</span></p>
      <p>Email: <span className="user-email">{user.email}</span></p>
      <button 
        onClick={() => setUser({ ...user, name: 'Updated Name' })}
        className="update-button"
      >
        Update Name
      </button>
    </div>
  );
};

export const UseContextDemo = () => {
  const [user, setUser] = useState({
    name: 'John Doe',
    email: 'john@example.com'
  });

  return (
    <div className="hook-container">
      <h2>useContext Demo</h2>
      <UserContext.Provider value={{ user, setUser }}>
        <UserProfile />
      </UserContext.Provider>
    </div>
  );
};