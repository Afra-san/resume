import './App.css';
import Navbar from './comps/Navbar';
import Home from './comps/Home';
import Social from './comps/Social';
import Works from './comps/Works';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Social />
      <Works />
    </div>
  );
}

export default App;
