import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { Preview } from '../pages/Preview';
import { Home } from "../pages/Home";
import { NavBar } from '../components/NavBar';
import { NavBarResponsive } from '../components/NavBarResponsive';
import { Redes } from '../components/Redes';
import { Modal } from '../components/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const location = useLocation();

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const showModal = (content) => {
    setModalContent(content);
    setIsModalVisible(true);
  };

  const hideModal = () => {
    setIsModalVisible(false);
    setModalContent(null);
  };

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
        <Route path="/home" element={<Home showModal={showModal}/>} />
      </Routes>
      <Modal isVisible={isModalVisible} hideModal={hideModal} content={modalContent} />
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
