import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Preview } from '../pages/Preview';
import { Home } from "../pages/Home";
import { NavBar } from '../components/NavBar';
import { NavBarResponsive } from '../components/NavBarResponsive';
import { Redes } from '../components/Redes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 890);
  const location = useLocation();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 890);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div>
      {location.pathname !== "/" && (
        isMobile ? 
          <NavBarResponsive /> : 
          <NavBar />
      )}
      {location.pathname !== "/" && (
        isMobile ? null : <Redes />
      )}
      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

function AppWithRouter() {
  return (
    <HashRouter>
      <App />
    </HashRouter>
  );
}

export { AppWithRouter as App };
