import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { Produkte } from './pages/Produkte';
import { Technologie } from './pages/Technologie';
import { Ai } from './pages/Ai';
import { Preise } from './pages/Preise';
import { UeberUns } from './pages/UeberUns';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produkte" element={<Produkte />} />
          <Route path="/technologie" element={<Technologie />} />
          <Route path="/ai" element={<Ai />} />
          <Route path="/preise" element={<Preise />} />
          <Route path="/ueber-uns" element={<UeberUns />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
