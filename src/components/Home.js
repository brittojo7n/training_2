import '../App.css';
import Prop from './Prop.js';
import { useState } from 'react';
import Events from './Events';
import Condition from './Condition';

function Home() {
  const [color, setColor] = useState("red");

  return (
    <>
      <Prop />
      <h1>My favorite color is {color}!</h1>
      <button
        type="button"
        onClick={() => setColor("blue")}
      >Blue</button>
      <Events />
      <Condition />
    </>
  )
}

export default Home;