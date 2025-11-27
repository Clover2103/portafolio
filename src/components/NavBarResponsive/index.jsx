import React, { useState, useRef, useEffect } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useNavigation } from "../../context/NavigationContext";
import { WHATSAPP_LINK, EMAIL_LINK, LINKEDIN_LINK } from "../../config/links";
import logoNav from "../../assets/home/logo-clover.png";

const NavbarResponsive = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { activeSection, goTo } = useNavigation();
  const menuRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen((v) => !v);

  /* Cerrar al hacer clic fuera */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMenuOpen(false);
      }
    };
    if (isMenuOpen) document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isMenuOpen]);

  const handleClick = (index) => {
    goTo(index);
    setIsMenuOpen(false);
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
    <div className="w-full h-30 fixed top-0 left-0 z-[calc(500)] text-white">
      {/* NAV SUPERIOR */}
      <div className="h-full flex justify-between items-center px-8 bg-zinc-op">

        {/* LOGO */}
        <img src={logoNav} alt="Logo" className="w-[180px]" />

        {/* BOTÓN HAMBURGUESA ANIMADO */}
        <div
          onClick={toggleMenu}
          className="relative w-10 h-10 flex flex-col justify-center items-center cursor-pointer"
        >
          <span
            className={`block w-8 h-1 bg-white rounded transition-all duration-300 
              ${isMenuOpen ? "rotate-45 translate-y-2" : ""}
            `}
          />
          <span
            className={`block w-8 h-1 bg-white rounded transition-all duration-300 my-1
              ${isMenuOpen ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`block w-8 h-1 bg-white rounded transition-all duration-300
              ${isMenuOpen ? "-rotate-45 -translate-y-2" : ""}
            `}
          />
        </div>
      </div>

      {/* OVERLAY OSCURO CLICK-FUERA */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black/40 z-[calc(400)]"></div>
      )}

      {/* MENU DESLIZANTE */}
      <div
        ref={menuRef}
        className={`
          fixed top-0 right-0 h-full w-[75%] max-w-[350px]
          bg-zinc-900 text-white z-[calc(500)]
          shadow-xl transition-transform duration-300
          overflow-y-auto
          ${isMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        <div className="flex flex-col justify-between h-full py-8">

          {/* SECCIONES */}
          <div className="flex flex-col w-full">
            {sections.map(({ label, index }) => (
              <button
                key={index}
                className={`
                  cursor-pointer h-[60px] text-center flex items-center justify-center font-bebass text-2xl
                  ${
                    activeSection === index
                      ? "bg-verde text-black font-bold"
                      : "hover-text-verde-nav"
                  }
                `}
                onClick={() => handleClick(index)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* REDES */}
          <div className="pb-4 flex flex-col items-center justify-center w-full">
            <div className="flex gap-3 mb-3">
              <IoLogoWhatsapp className="w-7 h-7 cursor-pointer hover-text-verde-nav" onClick={() => window.open(WHATSAPP_LINK, "_blank")} />
              <FaLinkedin className="w-7 h-7 cursor-pointer hover-text-verde-nav" onClick={() => window.open(LINKEDIN_LINK, "_blank")} />
              <IoIosMail className="w-7 h-7 cursor-pointer hover-text-verde-nav" onClick={() => window.open(EMAIL_LINK, "_blank")} />
            </div>
            <p className="font-roboto text-sm opacity-80">© Clover 2025</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export { NavbarResponsive };

