import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { FaGithub } from "react-icons/fa";
import { MdWeb } from "react-icons/md";
import "./SeccionProjects.css";

// 🔹 Importar imágenes (debes tenerlas en /src/assets/projects/)
import vigiempleoImg from "../../assets/home/projects/vigiempleo.png";
import aiexImg from "../../assets/home/projects/aiex ocp.png";
import cognoImg from "../../assets/home/projects/cognoseguridad.png";
import conasegurImg from "../../assets/home/projects/conasegur.png";
import clubImg from "../../assets/home/projects/clubdetiro.png";

import imgPreview from "../../assets/home/projects/back-preview.jpg";
import imgBack from "../../assets/home/projects/back.jpg";
const projects = [
  {
    id: 1,
    title: "VIGIEMPLEO.COM",
    description: "Plataforma web desarrollada para el sector de vigilancia y seguridad privada, que conecta a profesionales con oportunidades laborales y a las empresas con el talento que necesitan. Implementada con HTML, CSS, JavaScript y PHP.",
    image: vigiempleoImg,
    github: "https://github.com/Clover2103/vigiempleo",
    site: import.meta.env.VITE_VIGIEMPLEO,
  },
  {
    id: 2,
    title: "AIEX.COM.CO",
    description: "Sistema web que respalda la gestión de certificación de personas bajo la norma ISO/IEC 17024:2012. Digitaliza procesos de evaluación y asegura confiabilidad en la verificación de competencias.",
    image: aiexImg,
    github: "https://github.com/Clover2103/AIEX-OCP",
    site: import.meta.env.VITE_AIEXOCP,
  },
  {
    id: 3,
    title: "COGNOSEGURIDAD",
    description: "Sitio web creado para una academia con más de 20 años de experiencia en capacitación en vigilancia y seguridad privada. Interfaz clara y funcional con frontend en React y backend en PHP.",
    image: cognoImg,
    github: "https://github.com/Clover2103/cognoseguridad",
    site: import.meta.env.VITE_COGNOSEGURIDAD,
  },
  {
    id: 4,
    title: "CONASEGUR FES 4.0",
    description: "Portal institucional para la Corporación Nacional de Empresas de Seguridad Privada. Incluye un diseño moderno y adaptable con React y PHP para mejorar la experiencia de usuario.",
    image: conasegurImg,
    github: "https://github.com/Clover2103/conasegur",
    site: import.meta.env.VITE_CONASEGUR,
  },
  {
    id: 5,
    title: "CLUB DE TIRO CONASEGUR",
    description: "Página web enfocada en la difusión de la cultura y capacitación en manejo seguro de armas y actividades recreativas. Diseño atractivo y escalable.",
    image: clubImg,
    github: "https://github.com/Clover2103/conasegur",
    site: import.meta.env.VITE_CLUBDETIRO,
  },
];

const SeccionProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  // 🔹 Observer para detectar entrada/salida de la sección
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowPreview(true);
          setCurrentIndex(0);

          timerRef.current = setTimeout(() => {
            setShowPreview(false);
          }, 1000);
        } else {
          clearTimeout(timerRef.current);
          setShowPreview(false);
          setCurrentIndex(0);
        }
      },
      { threshold: 0.5 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
      clearTimeout(timerRef.current);
    };
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div
      id="proyectos"
      className="w-full min-h-[850px] relative z-30"
      ref={sectionRef}
      style={{
        backgroundImage: `url(${imgBack})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div 
        className="absolute w-full h-full bg-black opacity-30 z-[calc(10)]"
      ></div>
      
      <div className="min-h-[calc(110vh-7.5rem)] sm:min-h-[calc(100vh-7.5rem)] lg:w-[calc(100%-9.99rem)] w-[calc(100%)] lg:left-40 top-30 left-0 relative lg:absolute z-10 flex justify-start items-end ptb-16 wt-850 mtb-16">
        {showPreview ? (
          <div className="w-full h-full fixed top-0 left-0 flex items-center justify-center bg-black">
            <img
              src={imgPreview}
              alt="Preview proyectos"
              className="w-screen h-screen object-cover object-center"
            />
          </div>
        ) : (
          <div
            className="relative w-full min-h-[calc(110vh-7.5rem)] flex items-certer justify-start text-white overflow-hidden z-50"
          >
            <img src={projects[currentIndex].image} 
              className="absolute left-0 sm:left-0 md:left-25 lg:left-1/4 top-0.5 sm:top-[calc(20px)] md:top-[calc(0px)] lg:top-0.5 w-[500px] sm:w-[550px] md:w-[700px] lg:w-[calc(800px)] -z-10 opacity-80 object-contain"
              alt="" 
            />
            

            {currentIndex > 0 && (
              <IoIosArrowBack
                className="absolute top-30 left-4 text-5xl cursor-pointer z-[calc(100)] hover-text-verde"
                onClick={handlePrev}
              />
            )}

            {/* Contenido */}
            <div className="relative flex flex-col items-start justify-end lg:justify-center gap-4 max-w-[600px] p-6 text-justify z-[calc(50)]">
              <p className="text-4xl sm:text-5xl lg:text-6xl font-bebas text-start">
                {projects[currentIndex].title}
              </p>
              <p className="text-sm sm:text-base lg:text-lg font-roboto">
                {projects[currentIndex].description}
              </p>
              <div className="flex flex-col md:flex-row gap-3 justify-start w-full">
                <a
                  href={projects[currentIndex].site}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex justify-center items-center cursor-pointer gap-2 w-full md:w-[150px] h-[calc(40px)] rounded-lg bg-verde text-black font-roboto">
                    <MdWeb /> Sitio
                  </button>
                </a>
                <a
                  href={projects[currentIndex].github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="flex justify-center items-center cursor-pointer gap-2 w-full md:w-[150px] h-[calc(40px)] rounded-lg bg-black text-white font-roboto">
                    <FaGithub /> GitHub
                  </button>
                </a>
              </div>
            </div>

            {/* 🔹 Bullets */}
            <div className="flex justify-center space-x-3 absolute bottom-0 left-1/2 z-50 gap-2 transform -translate-x-1/2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 cursor-pointer rounded transition-colors duration-300 ${
                    currentIndex === index ? "bg-verde" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>

            {currentIndex < projects.length - 1 && (
              <IoIosArrowForward
                className="absolute top-30 right-4 text-5xl cursor-pointer z-[calc(100)] hover-text-verde"
                onClick={handleNext}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export { SeccionProjects };