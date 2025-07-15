import './Prop.css';
import '../App.css';

function Prop() {
  return (
    <Garage brand="Ford"></Garage>
  )
}

function Garage(props){
  return (
    <h3>Car is {props.brand}</h3>
  )
}

export default Prop;