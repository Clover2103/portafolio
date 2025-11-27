import React from "react";
import "./Navbar.css";
import { useNavigation } from "../../context/NavigationContext";
import { WHATSAPP_LINK } from "../../config/links"
import logoNav from "../../assets/home/logo-clover.png"

const linkWhatsapp = import.meta.env.VITE_WHATSAPP;

const Navbar = () => {
  const { activeSection, goTo } = useNavigation();

  const sections = [
    { label: "INICIO", index: 0 },
    { label: "EXPERIENCIA", index: 1 },
    { label: "PROYECTOS", index: 2 },
    { label: "EDUCACION", index: 3 },
    { label: "ALIADOS", index: 4 },
    { label: "CONTACTO", index: 5 },
  ];

  return (
    <div className="w-[calc(100vw)] h-[calc(110px)] fixed left-0 top-0 flex justify-around items-center font-semibold z-[calc(100)] text-white">
      <div className="flex justify-center items-center">
        <img src={logoNav} alt="Logo" className="w-[calc(180px)]" />
      </div>

      <div>
        <ul className="flex gap-6">
          {sections.map(({label,index}) => (
            <li key={index}>
              <button
                className={`hover-text-verde-nav cursor-pointer ${activeSection === index ? "text-verde" : ""}`}
                onClick={() => goTo(index)}
              >
                {label}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <a onClick={() => window.open(WHATSAPP_LINK, "_blank")} className="hover-text-verde-nav cursor-pointer" rel="noreferrer"><p>+57 3046783917</p></a>
      </div>
    </div>
  );
};

export { Navbar };
