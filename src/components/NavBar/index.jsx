import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="fixed w-full top-0 left-0 h-32 z-[calc(500)]">
      <div className="flex justify-around h-full items-center w-full">
        <div>
          <p className="cursor-pointer text-white">Logo</p>
        </div>
        <div className="flex gap-8 ">
          <p className="cursor-pointer hover-text-verde">Inicio</p>
          <p className="cursor-pointer hover-text-verde">Experiencia</p>
          <p className="cursor-pointer hover-text-verde">Proyectos</p>
          <p className="cursor-pointer hover-text-verde">Educacion</p>
          <p className="cursor-pointer hover-text-verde">Aliados</p>
          <p className="cursor-pointer hover-text-verde">Contacto</p>
        </div>
        <div>
          <p className="cursor-pointer hover-text-verde">+57 304 678 3917</p>
        </div>
      </div>
    </div>
  );
};

export { NavBar };
