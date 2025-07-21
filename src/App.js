import logo from './hyp.webp';
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
import { Button, Row } from 'antd';
import { Pagination } from 'antd';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header>
        <img className="App-logo" src={logo} alt="logo" />
      </header>
      <BrowserRouter>
        <nav>
          <Row style={{gap: '15px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
          <Link to="/"><Button>Home</Button></Link>
          &nbsp; &nbsp;
          <Link to="/prop"><Button>Prop</Button></Link>
          &nbsp; &nbsp;
          <Link to="/condition"><Button>Condition</Button></Link>
          &nbsp; &nbsp;
          <Link to="/form"><Button>Form</Button></Link>
          &nbsp; &nbsp;
          <Link to="/use-state"><Button>useState</Button></Link>
          &nbsp; &nbsp;
          <Link to="/use-effect"><Button>useEffect</Button></Link>
          &nbsp; &nbsp;
          <Link to="/use-context"><Button>useContext</Button></Link>
          &nbsp; &nbsp;
          <Link to="/use-ref"><Button>useRef</Button></Link>
          &nbsp; &nbsp;
          <Link to="/use-memo"><Button>useMemo</Button></Link>
          &nbsp; &nbsp;
          <Link to="/use-callback"><Button>useCallback</Button></Link>
          &nbsp; &nbsp;
          <Link to="/antd"><Button>AntDesign</Button></Link>
          </Row>
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
      <Pagination defaultCurrent={1} total={50} style={{marginTop: '40px'}} />
    </div>
  );
}

export default App;