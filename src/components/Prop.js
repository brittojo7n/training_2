import './Prop.css';
import '../App.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Prop() {
  var navigate = useNavigate();
  const handleClick = () => {
    navigate('/')
  };
  const [color, setColor] = useState(true); // Using a boolean is simpler for toggling
  const favColor = color ? "Blue" : "Red";
  return (
    <>
    <button onClick={handleClick}>Go Home</button>
    <Garage brand="Ford" favColor={favColor.toLowerCase()} />
      <h3>My favorite color is {favColor}!</h3>
      <button onClick={() => setColor(!color)}>
        {favColor}
      </button>
    </>
  );
};

function Garage(props){
  return (
    <>
    <h1>Prop Page</h1>
    <h3 style={{ color: props.favColor }}>Car is {props.brand}</h3>
    </>
  )
}

export default Prop;