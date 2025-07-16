import '../App.css';
import Prop from './Prop.js';
import { useState } from 'react';
import Condition from './Condition';

function Home() {
  const [color, setColor] = useState(true); // Using a boolean is simpler for toggling
  const favColor = color ? "Blue" : "Red";
  return (
    <>
      <Prop favColor={favColor.toLowerCase()} />
      <h1>My favorite color is {favColor}!</h1>
      <button onClick={() => setColor(!color)}>
        {favColor}
      </button>
      <Condition />
    </>
  )
}

export default Home;