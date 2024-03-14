import React, { useState } from 'react';
import Login from './components/LoginPage/index.js';
import HomePage from './components/HomePage/index.js';

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogout = () => {
    setLoggedIn(false);
  };

  return (
    <div>
      {!loggedIn ? (
        <Login onLogin={setLoggedIn} />
      ) : (
        <HomePage onLogout={handleLogout} />
      )}
    </div>
  );
};

export default App;