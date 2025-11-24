import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="fixed w-full top-0 left-0 h-32">
      <div className="flex justify-around h-full items-center w-full">
        <div>
          <p className="cursor-pointer">Logo</p>
        </div>
        <div className="flex gap-8">
          <p className="cursor-pointer">Inicio</p>
          <p className="cursor-pointer">Experiencia</p>
          <p className="cursor-pointer">Proyectos</p>
          <p className="cursor-pointer">Educacion</p>
          <p className="cursor-pointer">Contacto</p>
          <p></p>
        </div>
        <div>
          <p className="cursor-pointer">+57 304 678 3917</p>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
