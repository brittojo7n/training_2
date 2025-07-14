import logo from './logo.svg';
import './App.css';

function App() {
  let login = true;
  let text;
  
  if (login === true){
    text = "Logged in";
  } else {
    text = "Not logged in";
  }
  return (
    <div class="App">
      <header>
      <h1>Welcome!</h1>
      <h2>{text}</h2>
      </header>
      <img class="App-logo" src={logo} alt="logo" />
    </div>
  );
}

export default App;
