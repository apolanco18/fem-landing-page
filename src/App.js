import logo from './logo.svg';
import './App.css';

import Nav from '../src/components/Nav/Nav'

function App() {
  return (
    <div className="App">
      <Nav
        btnArgs={{buttonName:'Get Started'}}
      />
    </div>
  );
}

export default App;
