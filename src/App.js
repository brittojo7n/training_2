import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Prop from './components/Prop.js';
import Condition from './components/Condition.js';
import Form from './components/Form.js';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header>
        <img className="App-logo" src={logo} alt="logo" />
    </header>
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        &nbsp; &nbsp;
        <Link to="/prop">Prop</Link>
        &nbsp; &nbsp;
        <Link to="/condition">Condition</Link>
        &nbsp; &nbsp;
        <Link to="/form">Form</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/prop" element={<Prop />} />
        <Route path="/condition" element={<Condition />} />
        <Route path="/form" element={<Form />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
