import React, { useState, useEffect, useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import logoUT from "../../assets/home/educacion/logo-ut.svg";
import logoPlatzi from "../../assets/home/educacion/logo-platzi.svg";
import doc1 from "../../assets/home/educacion/documents/3. diploma-python.pdf";
import doc2 from "../../assets/home/educacion/documents/3. diploma-python.pdf";
import doc3 from "../../assets/home/educacion/documents/3. diploma-python.pdf";
import doc4 from "../../assets/home/educacion/documents/4. diploma-adverbios.pdf";
import doc5 from "../../assets/home/educacion/documents/5. diploma-reactjs.pdf";
import doc6 from "../../assets/home/educacion/documents/6. diploma-react-vite-tailwindcss.pdf";
import doc7 from "../../assets/home/educacion/documents/7. diploma-habilidades-blandas.pdf";
import doc8 from "../../assets/home/educacion/documents/8. diploma-javascript-practico.pdf";
import doc9 from "../../assets/home/educacion/documents/9. diploma-frontend-developer-practico.pdf";
import doc10 from "../../assets/home/educacion/documents/10. diploma-git-github.pdf";
import "./SeccionEducation.css";

/* ==========================================================
   JSON de educación
========================================================== */
const educationData = [
  {
    id: 1,
    logo: logoUT,
    titulo: "Ingeniería en Sistemas",
    institucion: "Universidad del Tolima",
    fecha: "28 de Julio de 2023",
    descripcion: "Formación integral en desarrollo de software, arquitectura de aplicaciones, redes, seguridad informática y gestión tecnológica.",
    pdf: doc1
  },
  {
    id: 2,
    logo: logoUT,
    titulo: "Tecnología en Gestión de Bases de Datos",
    institucion: "Universidad del Tolima",
    fecha: "30 de Julio de 2022",
    descripcion: "Especialización en modelado de datos, administración de motores SQL, optimización de consultas y sistemas de información.",
    pdf: doc2
  },
  {
    id: 3,
    logo: logoPlatzi,
    titulo: "Curso de Python",
    institucion: "Platzi",
    fecha: "02 de Octubre de 2025",
    descripcion: "Aprendizaje práctico en Python para automatización, análisis de datos y desarrollo de scripts eficientes.",
    pdf: doc3
  },
  {
    id: 4,
    logo: logoPlatzi,
    titulo: "Basic English Course A2: Nouns and Future Intentions",
    institucion: "Platzi",
    fecha: "12 de Septiembre de 2025",
    descripcion: "Desarrollo de habilidades comunicativas en inglés enfocadas en estructuras gramaticales y expresión de ideas futuras.",
    pdf: doc4
  },
  {
    id: 5,
    logo: logoPlatzi,
    titulo: "Curso Profesional de React.js",
    institucion: "Platzi",
    fecha: "01 de Septiembre de 2025",
    descripcion: "Construcción de interfaces modernas usando componentes, hooks, estados globales y arquitectura frontend profesional.",
    pdf: doc5
  },
  {
    id: 6,
    logo: logoPlatzi,
    titulo: "React.js con Vite.js y TailwindCSS",
    institucion: "Platzi",
    fecha: "08 de Abril de 2025",
    descripcion: "Creación de aplicaciones rápidas y optimizadas con Vite y diseño altamente responsive con TailwindCSS.",
    pdf: doc6
  },
  {
    id: 7,
    logo: logoPlatzi,
    titulo: "Habilidades Blandas para el Desarrollo Profesional",
    institucion: "Platzi",
    fecha: "18 de Febrero de 2025",
    descripcion: "Fortalecimiento de comunicación, liderazgo, empatía, resolución de problemas y trabajo colaborativo.",
    pdf: doc7
  },
  {
    id: 8,
    logo: logoPlatzi,
    titulo: "Curso de JavaScript",
    institucion: "Platzi",
    fecha: "27 de Mayo de 2024",
    descripcion: "Dominio de JavaScript moderno: asincronía, manipulación del DOM, funciones avanzadas y patrones esenciales.",
    pdf: doc8
  },
  {
    id: 9,
    logo: logoPlatzi,
    titulo: "Curso Práctico de Frontend Developer",
    institucion: "Platzi",
    fecha: "24 de Mayo de 2024",
    descripcion: "Diseño y construcción de interfaces completas aplicando HTML, CSS, JavaScript y metodologías profesionales.",
    pdf: doc9
  },
  {
    id: 10,
    logo: logoPlatzi,
    titulo: "Curso de Git y GitHub",
    institucion: "Platzi",
    fecha: "23 de Mayo de 2024",
    descripcion: "Gestión de versiones, flujos de trabajo profesionales, ramas, merges y colaboración en proyectos reales.",
    pdf: doc10
  }
];


const SeccionEducation = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPreview, setShowPreview] = useState(false);

  const sectionRef = useRef(null);
  const timerRef = useRef(null);

  /* ==========================================================
    Intersection Observer
  ========================================================== */
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

  /* ==========================================================
    Lógica del slider (3 items por página)
  ========================================================== */
  const itemsPerPage = 3;
  const totalSlides = Math.ceil(educationData.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1 < totalSlides ? prev + 1 : prev));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 >= 0 ? prev - 1 : prev));
  };

  /* Elementos visibles */
  const visibleItems = educationData.slice(
    currentIndex * itemsPerPage,
    currentIndex * itemsPerPage + itemsPerPage
  );

  return (
    <div
      id="educacion"
      className="w-full min-h-[calc(100vh)] relative z-30 bg-zinc-900"
      ref={sectionRef}
    >
      <div className="min-h-[calc(110vh-7.5rem)] sm:min-h-[calc(100vh-7.5rem)] lg:w-[calc(100%-9.99rem)] w-full lg:left-40 top-30 left-0 relative lg:absolute z-10 flex justify-start items-center ptb-16 wt-850 mtb-16 bg-zinc-900">

        {/* CONTENEDOR DEL SLIDER */}
        <div className="relative w-full flex flex-col items-center text-white overflow-hidden z-50 px-6 my-14">

          {/* Flecha Izquierda */}
          {currentIndex > 0 && (
            <IoIosArrowBack
              className="absolute top-1/2 left-2 text-5xl cursor-pointer z-[calc(100)] hover-text-verde transition"
              onClick={handlePrev}
            />
          )}

          {/* TARJETAS UNA DEBAJO DE LA OTRA */}
          <div className="flex flex-col gap-6 w-full max-w-4xl">

            {visibleItems.map((item) => (
              <div
                key={item.id}
                className="flex flex-col md:flex-row justify-around min-h-[calc(180px)] bg-zinc-800 relative border border-zinc-700 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 gap-4"
              >
                {/* LOGO */}
                <div className="w-full md:max-w-22 flex justify-center items-center">
                  <img
                    src={item.logo}
                    alt="logo"
                    className="object-contain w-22 min-w-22"
                  />
                </div>

                {/* TEXTO */}
                <div className="md:max-w-[calc(220px)] text-center flex flex-col justify-center items-center gap-0.5">
                  <h3 className="text-md font-semibold">{item.titulo}</h3>
                  <p className="text-zinc-300 text-md font-medium">{item.institucion}</p>
                  <p className="text-zinc-500 text-md">{item.fecha}</p>
                </div>

                <div className="md:max-w-[calc(250px)] flex flex-col justify-center items-center">
                  <p className="text-zinc-300 text-md text-center leading-relaxed">
                    {item.descripcion}
                  </p>
                </div>

                <button 
                  className="absolute text-gray-400 hover:text-white left-0 bottom-0 cursor-pointer px-1.5 py-0.5 border-gray-400 hover:border-white border-1 rounded-md z-[calc(100)] bg-zinc-800 text-sm"
                  onClick={() => window.open(item.pdf, "_blank")}
                >
                  Ver certificado
                </button>
              </div>
            ))}

          </div>

          {/* Flecha Derecha */}
          {currentIndex < totalSlides - 1 && (
            <IoIosArrowForward
              className="absolute top-1/2 right-2 text-5xl cursor-pointer z-[calc(100)] hover-text-verde transition"
              onClick={handleNext}
            />
          )}

        </div>
      </div>
    </div>
  );
};

export { SeccionEducation };
