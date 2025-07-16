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

      <h3>1. `if-else` Statement:</h3>
      {greeting}

      <hr />

      <h3>2. Ternary Operator (`? :`):</h3>
      {isLoggedIn ? <p>Logout</p> : <p>Login</p>}

      <hr/>

      <h3>3. Logical `&&` Operator:</h3>
      {isLoggedIn && <p>Logged in as User001!</p>}

      <hr />
    </div>
  );
}

export default Condition;