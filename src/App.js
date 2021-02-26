import logo from './logo.svg';
import './App.css';

import Nav from '../src/components/Nav/Nav'
import Home from '../src/screens/Home/Home'
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Nav
        btnArgs={{buttonName:'Get Started'}}
      />
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
