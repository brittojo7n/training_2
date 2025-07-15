import '../App.css';
import Prop from './Prop.js';
import { useState } from 'react';

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
    </>
  )
}

export default Home;