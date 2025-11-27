import React from "react";
import img1 from "../../assets/home/allies/logo-isme.svg";
import img2 from "../../assets/home/allies/logo-spartnerg.png";
import img3 from "../../assets/home/allies/logo-conasegur.svg";
import img4 from "../../assets/home/allies/logo-aiexocp.png";
import img5 from "../../assets/home/allies/logo-aiexsst.png";
import img6 from "../../assets/home/allies/logo-clubdetiro.png";
import img7 from "../../assets/home/allies/logo-cognoseguridad.svg";
import img8 from "../../assets/home/allies/logo-funhumac.svg";
import img9 from "../../assets/home/allies/logo-vialseguridad.svg";
import img10 from "../../assets/home/allies/logo-vigiempleo.svg";
import { WEB_PAGES } from "../../config/links";
import "./SeccionAllies.css";

const allies = [
  { name: "Spartnerg", image: img2, url: WEB_PAGES.spg },
  { name: "Conasegur", image: img3, url: WEB_PAGES.conasegur },
  { name: "aiexocp", image: img4, url: WEB_PAGES.aiexocp },
  { name: "aiexsst", image: img5, url: WEB_PAGES.aiexsst },
  { name: "club de tiro", image: img6, url: WEB_PAGES.clubdetiro },
  { name: "cognoseguridad", image: img7, url: WEB_PAGES.cognoseguridad },
  { name: "funhumac", image: img8, url: WEB_PAGES.funhumac },
  { name: "vialseguridad", image: img9, url: WEB_PAGES.vialseguridad },
  { name: "vigiempleo", image: img10, url: WEB_PAGES.vigiempleo },
  { name: "ISME", image: img1, url: WEB_PAGES.isme }
];

const SeccionAllies = () => {
  return (
    <div className="w-full h-full relative text-white bg-zinc-900" id="aliados">
      <div className="w-full lg:w-[calc(100%-9.99rem)] lg:left-40 relative lg:absolute top-30 left-0 z-10 flex flex-col justify-start items-center py-10 bg-zinc-900">
        
        {/* Título con spacing responsivo */}
        <div className="mb-8 sm:mb-12 md:mb-16">
          <p className="font-bold text-3xl sm:text-4xl md:text-5xl font-bebas px-4 text-center">
            Empresas con las que he trabajado
          </p>
        </div>

        {/* Grilla */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 md:gap-16 mx-5">
          {allies.map((ally, index) => (
            <div key={index} className="flex justify-center items-center">
              <a href={ally.url} className="cursor-pointer" target="_blank" rel="noopener noreferrer">
                <img
                  src={ally.image}
                  alt={ally.name}
                  title={ally.name}
                  className="w-[250px] md:w-[180px] lg:w-[150px] opacity-70 hover:opacity-100 transition-opacity duration-300"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export { SeccionAllies };
