import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';

function App() {

  return (
    <div class="App">
      <header>
      <h1>Home Page</h1>
      </header>
      <img class="App-logo" src={logo} alt="logo" />
      <Home />
    </div>
  );
}

export default App;
