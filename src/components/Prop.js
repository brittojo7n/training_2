import './Prop.css';
import '../App.css';

function Prop({ favColor }) {
  return (
    <Garage brand="Ford" favColor={favColor} />
  )
}

function Garage(props){
  return (
    <h3 style={{ color: props.favColor }}>Car is {props.brand}</h3>
  )
}

export default Prop;