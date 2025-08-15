import './App.css';
import Particles from './components/Particles';
import { useScroll, useTransform, motion } from 'framer-motion';
import Dock from './components/Dock'; // Import your Dock component
import { VscHome, VscSymbolEvent, VscGithubProject, VscAccount, VscCallIncoming } from 'react-icons/vsc';
import TiltedCard from './components/TiltedCard';
import React from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Events from './pages/Events';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import MyDock from './components/MyDock';
import { AnimatePresence } from 'framer-motion';

const items = [
  { icon: <VscHome size={18} />, label: 'Home', onClick: () => console.log('Home') },
  { icon: <VscSymbolEvent size={18} />, label: 'Events', onClick: () => console.log('Events') },
  { icon: <VscGithubProject size={18} />, label: 'Projects', onClick: () => console.log('Projects') },
  { icon: <VscAccount size={18} />, label: 'About us', onClick: () => console.log('About us') },
  { icon: <VscCallIncoming size={18} />, label: 'Contact us', onClick: () => console.log('Contact us') },
];

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <AnimatedRoutes />
        <MyDock />
      </div>
    </BrowserRouter>
  );
}

export default App;
