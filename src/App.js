import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Herosection from './components/Herosection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Herosection/>
      <Footer/>
    </div>
  );
}

export default App;
