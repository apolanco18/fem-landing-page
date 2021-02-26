import logo from './logo.svg';
import './App.css';

import Nav from '../src/components/Nav/Nav'
import Home from '../src/screens/Home/Home'

function App() {
  return (
    <div className="App">
      <Nav
        btnArgs={{buttonName:'Get Started'}}
      />
      <Home/>
    </div>
  );
}

export default App;
