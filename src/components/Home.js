import '../App.css';
import Prop from './Prop.js';
import { useState } from 'react';
import Condition from './Condition';

function Home() {
  const [color, setColor] = useState("Red");
  const changecolor = color ? "Blue" : "Red";
  return (
    <>
      <Prop />
      <h1>My favorite color is {changecolor}!</h1>
      <button onClick={() => setColor(!color)}>
        {changecolor}
      </button>
      <Condition />
    </>
  )
}

export default Home;