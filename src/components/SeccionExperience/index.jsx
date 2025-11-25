import React, { useEffect, useRef, useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// importa tus imágenes igual que antes...
import imgFront1 from "../../assets/home/skills/frontend/logo-html.svg";
import imgFront2 from "../../assets/home/skills/frontend/logo-bootstrap.png";
import imgFront3 from "../../assets/home/skills/frontend/logo-figma.svg";
import imgFront4 from "../../assets/home/skills/frontend/logo-css.svg";
import imgFront5 from "../../assets/home/skills/frontend/logo-javascript.png";
import imgFront6 from "../../assets/home/skills/frontend/logo-react.svg";
import imgFront7 from "../../assets/home/skills/frontend/logo-tailwindcss.svg";
import imgBack1 from "../../assets/home/skills/backend/logo-laravel.svg";
import imgBack2 from "../../assets/home/skills/backend/logo-php.svg";
import imgBack3 from "../../assets/home/skills/backend/logo-python.svg";
import imgData1 from "../../assets/home/skills/bases-datos/logo-mysql.svg";
import imgData2 from "../../assets/home/skills/bases-datos/logo-postgreSQL.svg";
import imgDevops1 from "../../assets/home/skills/devops/logo-git.png";
import imgDevops2 from "../../assets/home/skills/devops/logo-github.svg";
import imgDevops3 from "../../assets/home/skills/devops/logo-wordpress.png";
import imgDevops4 from "../../assets/home/skills/devops/logo-nodejs.png";
import imgDevops5 from "../../assets/home/skills/devops/logo-npm.svg";
import imgDevops6 from "../../assets/home/skills/devops/logo-composer.svg";

import "./SeccionExperience.css";

/* ---------- Hook useProgress (con cancelación y easing) ---------- */
function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}
function useProgress(target, active, duration = 1000, easing = easeOutCubic) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    if (!active) {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      startRef.current = null;
      setValue(0);
      return;
    }

    startRef.current = null;

    const step = (timestamp) => {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const t = Math.min(elapsed / duration, 1);
      const eased = typeof easing === "function" ? easing(t) : t;
      const current = Math.round(eased * target);
      setValue(current);

      if (t < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        rafRef.current = null;
      }
    };

    rafRef.current = requestAnimationFrame(step);

    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [active, target, duration, easing]);

  return value;
}

/* -------------------- datos -------------------- */
const skills = [
  {
    name: "Frontend",
    progress: 80,
    images: [
      { img: imgFront1, porcent: 90, name: "HTML5" },
      { img: imgFront4, porcent: 85, name: "CSS3" },
      { img: imgFront5, porcent: 70, name: "JavaScript" },
      { img: imgFront6, porcent: 79, name: "React.js" },
      { img: imgFront3, porcent: 47, name: "Figma" },
      { img: imgFront2, porcent: 76, name: "Bootstrap" },
      { img: imgFront7, porcent: 62, name: "TailwindCSS" },
    ],
  },
  {
    name: "Backend",
    progress: 68,
    images: [
      { img: imgBack2, porcent: 77, name: "PHP" },
      { img: imgBack3, porcent: 65, name: "Python" },
      { img: imgBack1, porcent: 52, name: "Laravel" },
    ],
  },
  {
    name: "Database",
    progress: 72,
    images: [
      { img: imgData1, porcent: 87, name: "MySQL" },
      { img: imgData2, porcent: 73, name: "PostgreSQL" },
    ],
  },
  {
    name: "Devops",
    progress: 85,
    images: [
      { img: imgDevops1, porcent: 89, name: "GIT" },
      { img: imgDevops2, porcent: 93, name: "GitHub" },
      { img: imgDevops3, porcent: 85, name: "Wordpress" },
      { img: imgDevops4, porcent: 62, name: "Node.js" },
      { img: imgDevops5, porcent: 82, name: "NPM" },
      { img: imgDevops6, porcent: 89, name: "Composer" },
    ],
  },
];

/* ------------------ componente ------------------ */
const SeccionExperience = ({ showModal }) => {
  let experienceDate = new Date("2022-07-30");
  let today = new Date();
  let diff = today - experienceDate;
  let years = diff / (1000 * 60 * 60 * 24 * 365);

  const sectionRef = useRef(null);
  const [animateBars, setAnimateBars] = useState(false);

  // Observer para la sección: activa/desactiva animateBars según visibilidad
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setAnimateBars(entry.isIntersecting);
        });
      },
      { threshold: 0.3 } // 30% visible
    );

    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) obs.unobserve(sectionRef.current);
    };
  }, []);

  // Al pulsar un skill, abrimos modal con su contenido (el modal debe renderizar showModal)
  const handleButtonClick = (skill) => {
    const ModalContent = () => {
      const modalRef = useRef(null);
      const [animateModal, setAnimateModal] = useState(false);

      useEffect(() => {
        const obs = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => setAnimateModal(entry.isIntersecting));
          },
          { threshold: 0.3 }
        );
        if (modalRef.current) obs.observe(modalRef.current);
        return () => {
          if (modalRef.current) obs.unobserve(modalRef.current);
        };
      }, []);

      return (
        <div ref={modalRef} className="flex flex-col justify-center items-center p-6 text-white">
          <h2 className="font-bold text-2xl mb-3 text-center">Habilidades en {skill.name}</h2>

          <div className="grid grid-cols-2 gap-4 w-[90%]">
            {skill.images.map((image, idx) => {
              const progress = useProgress(image.porcent, animateModal, 900);
              return (
                <div key={idx} className="flex flex-col items-center">
                  <img src={image.img} alt={image.name} title={image.name} className="w-18 h-18 object-contain" />
                  <div className="flex justify-between w-full text-sm font-medium ">
                    <p className="text-md">{image.name}</p>
                    <p className="text-md text-verde">{progress}%</p>
                  </div>
                  <div className="w-full h-2 bg-zinc-200 rounded-md overflow-hidden">
                    <div className="bg-verde h-2 rounded-2xl" style={{ width: `${progress}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      );
    };

    // showModal espera JSX (según tu implementación previa)
    showModal(<ModalContent />);
  };

  return (
    <div ref={sectionRef} className="w-full min-h-[110vh] relative z-20 bg-zinc-900 ">
      <div className="min-h-[calc(100vh-7.5rem)] lg:w-[calc(100%-9.99rem)] w-full lg:left-40 relative lg:absolute top-30 left-0 z-10 flex lg:flex-row flex-col justify-center items-center py-16 bg-zinc-900 gap-3">
        <div className="w-full md:w-[50%] flex justify-center items-center text-white">
          <div className="flex flex-col justify-center items-center w-[400px] min-h-[450px] border-b-2 border-l-2 border-t-2">
            <p className="font-bold text-9xl text-center font-bebas">{Math.floor(years)}<span className="text-verde">.</span> </p>
            <div className="flex justify-center items-center w-full min-h-[200px]">
              <div className="w-2/5 h-[100px] border-b-2"></div>
              <div className="w-1/2 h-[100px]">
                <h2 className="text-center text-2xl">Años de experiencia</h2>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-[50%] flex justify-center items-center mt-8 lg:mt-0 text-white p-3">
          <div className="flex flex-col justify-around items-center w-[400px] min-h-[450px]">
            <h2 className="font-bold text-3xl w-full">Gran experiencia</h2>
            <p className="text-justify max-w-[60ch] text-md my-2">
              Cada línea de código es una oportunidad para crear soluciones.
            </p>
            {skills.map((skill, i) => {
              const progress = useProgress(skill.progress, animateBars, 1000);
              return (
                <div key={i} className="w-full mb-2">
                  <div className="flex justify-between w-full font-medium text-lg outline-0">
                    <h5>{skill.name}</h5>
                    <p className="text-verde">{progress}%</p>
                  </div>
                  <div className="w-full h-2 bg-zinc-200 rounded-md overflow-hidden mb-2">
                    <div className="bg-verde h-2 rounded-4xl" style={{ width: `${progress}%` }} />
                  </div>
                  <button className="flex items-center gap-2 text-verde hover:font-medium" onClick={() => handleButtonClick(skill)}>
                    Ver habilidades <FaLongArrowAltRight />
                  </button>
                </div>
              );
            })}

          </div>
        </div>
      </div>
    </div>
  );
};

export { SeccionExperience };