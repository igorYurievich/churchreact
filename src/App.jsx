import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Media from './pages/Media';
import Events from './pages/Events';
import Donate from './pages/Donate';
import Rules from './pages/Rules';
import Faith from './pages/Faith';
import 'bootstrap/dist/css/bootstrap.min.css';
const App = () => {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="media" element={<Media />} />
        <Route path="events" element={<Events />} />
        <Route path="donate" element={<Donate />} />
        <Route path="rules" element={<Rules />} />
        <Route path="faith" element={<Faith />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
