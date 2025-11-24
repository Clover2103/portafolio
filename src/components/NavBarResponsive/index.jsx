import React, { useState } from "react";
import { Link } from 'react-router-dom';
import { FaBars } from "react-icons/fa";
import "./NavBarResponsive.css";

const NavBarResponsive = ({ showModal }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="w-full top-0 left-0 h-32 z-[calc(500)]">
      <div className="flex w-full justify-between items-center h-full">
        <div className="ml-10">
          <div>
            <p>Logo</p>
          </div>
        </div>
        <div className="mr-10">
          <button onClick={toggleMenu}>
            <FaBars />
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div>
          <div>
            <p className="cursor-pointer">Inicio</p>
            <p className="cursor-pointer">Experiencia</p>
            <p className="cursor-pointer">Proyectos</p>
            <p className="cursor-pointer">Aliados</p>
            <p className="cursor-pointer">Educacion</p>
            <p className="cursor-pointer">Contacto</p>
          </div>
          <div>
            <p>© Clover</p>
          </div>
        </div>
      )}
    </div>
  );
};

export { NavBarResponsive };
