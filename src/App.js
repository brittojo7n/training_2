import logo from './logo.svg';
import './App.css';
import Home from './components/Home.js';
import Prop from './components/Prop.js';
import Condition from './components/Condition.js';
import Form from './components/Form.js';
import { UseStateDemo } from './components/UseStateDemo';
import { UseEffectDemo } from './components/UseEffectDemo';
import { UseContextDemo } from './components/UseContextDemo';
import { UseRefDemo } from './components/UseRefDemo';
import { UseMemoDemo } from './components/UseMemoDemo';
import { UseCallbackDemo } from './components/UseCallbackDemo';
import SampleAntD from './components/SampleAntD';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

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
          &nbsp; &nbsp;
          <Link to="/use-state">useState</Link>
          &nbsp; &nbsp;
          <Link to="/use-effect">useEffect</Link>
          &nbsp; &nbsp;
          <Link to="/use-context">useContext</Link>
          &nbsp; &nbsp;
          <Link to="/use-ref">useRef</Link>
          &nbsp; &nbsp;
          <Link to="/use-memo">useMemo</Link>
          &nbsp; &nbsp;
          <Link to="/use-callback">useCallback</Link>
          &nbsp; &nbsp;
          <Link to="/antd">Ant Design</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/prop" element={<Prop />} />
          <Route path="/condition" element={<Condition />} />
          <Route path="/form" element={<Form />} />
          <Route path="/use-state" element={<UseStateDemo />} />
          <Route path="/use-effect" element={<UseEffectDemo />} />
          <Route path="/use-context" element={<UseContextDemo />} />
          <Route path="/use-ref" element={<UseRefDemo />} />
          <Route path="/use-memo" element={<UseMemoDemo />} />
          <Route path="/use-callback" element={<UseCallbackDemo />} />
          <Route path="/antd" element={<SampleAntD />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;