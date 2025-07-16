import React, { useState } from 'react';

function UserGreeting() {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting() {
  return <h1>Please sign up.</h1>;
}

function Condition() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  let greeting;
  if (isLoggedIn) {
    greeting = <UserGreeting />;
  } else {
    greeting = <GuestGreeting />;
  }

  return (
    <div style={{ border: '2px solid green', padding: '10px', margin: '10px' }}>
      <h2>Conditional Rendering Examples</h2>

      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
      <hr />
      {greeting}
      {isLoggedIn && <p>Logged in as User001!</p>}
    </div>
  );
}

export default Condition;