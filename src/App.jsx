import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import VisiMisi from './pages/VisiMisi';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import TKHafidz from './pages/TKHafidz';
import DayCare from './pages/DayCare';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/visi-misi" element={<VisiMisi />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/tk-hafidz" element={<TKHafidz />} />
          <Route path="/day-care" element={<DayCare />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;