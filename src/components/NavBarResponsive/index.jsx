import React, { useState } from "react";
import { LiaLinkedinIn } from "react-icons/lia";
import { CgMail } from "react-icons/cg";
import { FaWhatsapp } from "react-icons/fa";
import { IoMenu } from "react-icons/io5";
import { useNavigation } from "../../context/NavigationContext";
const linkWhatsapp = import.meta.env.VITE_WHATSAPP;
const linkGmail = import.meta.env.VITE_GMAIL;
const linkLinkedin = import.meta.env.VITE_LINKEDIN;
import "./NavbarResponsive.css";

const NavbarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, goTo } = useNavigation();

  const toggleMenu = () => setIsMenuOpen(v => !v);

  const handleClick = (index) => {
    // 1) Actualiza la sección activa globalmente
    goTo(index);
    // 2) Cierra el menú
    setIsMenuOpen(false);
    // opcional: forzar focus/scroll o analytics aquí
  };

  const sections = [
    { label: "INICIO", index: 0 },
    { label: "EXPERIENCIA", index: 1 },
    { label: "PROYECTOS", index: 2 },
    { label: "EDUCACION", index: 3 },
    { label: "ALIADOS", index: 4 },
    { label: "CONTACTO", index: 5 },
  ];

  return (
    <div className="w-full h-30 fixed top-0 left-0 z-[calc(100)] text-white">
      <div className="h-full flex justify-between items-center px-16">
        <h1 className="logo_mr">Logo</h1>
        <IoMenu className="w-10 h-10 cursor-pointer icon_mr" onClick={toggleMenu} />
      </div>

      {isMenuOpen && (
        <div className="w-full flex justify-end pr-4">
          <div className="w-full md:w-[calc(450px)] h-[calc(100vh-120px)] flex flex-col justify-between items-center bg-zinc-900 z-[calc(100)]">
            <div className="flex flex-col w-full">
              {sections.map(({ label, index }) => (
                <button
                  key={index}
                  className={`cursor-pointer h-[60px] text-center flex items-center justify-center hover:bg-black hover:text-white ${
                    activeSection === index ? "bg-verde text-black" : ""
                  }`}
                  onClick={() => handleClick(index)}
                >
                  {label}
                </button>
              ))}
            </div>

            <div className="pb-4">
              <p>© Clover 2025</p>
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export { NavbarResponsive };
