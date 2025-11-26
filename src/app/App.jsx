import { useState, useEffect } from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import { Home } from "../pages/Home";
import { Preview } from "../pages/Preview";
import { Navbar } from "../components/NavBar";
import { NavbarResponsive } from "../components/NavBarResponsive";
import { Modal } from "../components/Modal";
import { Redes } from "../components/Redes";
import { NavigationProvider } from "../context/NavigationContext";
import "./App.css";

function AppContent() {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
    <div className="relative">
      {location.pathname !== "/" && (
        isMobile ? <NavbarResponsive /> : (<><Redes /><Navbar /></>)
      )}

      <Routes>
        <Route path="/" element={<Preview />} />
        <Route path="/home" element={<Home showModal={showModal} />} />
      </Routes>

      <Modal isVisible={isModalVisible} hideModal={hideModal} content={modalContent} />
    </div>
  );
}

export function App() {
  return (
    <HashRouter>
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </HashRouter>
  );
}
