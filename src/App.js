import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Footer from './Components/Footer';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path ="/about" element={<About />} />
        <Route path ="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
     
    </div>
  );
}

export default App;
