import React, { useEffect, useRef, useState } from "react";
import { SeccionHome } from "../../components/SeccionHome";
import { SeccionExperience } from "../../components/SeccionExperience";
import { SeccionProjects } from "../../components/SeccionProjects";
import { SeccionEducation } from "../../components/SeccionEducation";
import { SeccionAllies } from "../../components/SeccionAllies";
import { SeccionContact } from "../../components/SeccionContact";
import { useNavigation } from "../..//context/NavigationContext"; // ajusta ruta si hace falta

const sections = [
  { id: "home", Component: SeccionHome },
  { id: "experience", Component: SeccionExperience },
  { id: "projects", Component: SeccionProjects },
  { id: "education", Component: SeccionEducation },
  { id: "allies", Component: SeccionAllies },
  { id: "contact", Component: SeccionContact },
];

export const Home = ({ showModal }) => {
  const { activeSection, setActiveSection } = useNavigation();
  const [isAnimating, setIsAnimating] = useState(false);
  const scrollerRefs = useRef([]);

  const goTo = (nextIndex) => {
    if (isAnimating || nextIndex === activeSection || nextIndex < 0 || nextIndex >= sections.length) return;
    setIsAnimating(true);
    setActiveSection(nextIndex);
    setTimeout(() => setIsAnimating(false), 750);
  };

  useEffect(() => {
    const onWheel = (e) => {
      const scroller = scrollerRefs.current[activeSection];
      if (!scroller) return;

      const { scrollTop, clientHeight, scrollHeight } = scroller;
      const atTop = scrollTop <= 0;
      const atBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

      if (e.deltaY > 0) {
        if (!atBottom) return;
        e.preventDefault();
        goTo(activeSection + 1);
      } else if (e.deltaY < 0) {
        if (!atTop) return;
        e.preventDefault();
        goTo(activeSection - 1);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [activeSection, isAnimating]);

  const getTransform = (index) => {
    if (index === activeSection) return "translate-y-0 opacity-100";
    if (index < activeSection) return "-translate-y-full opacity-70";
    return "translate-y-full opacity-0";
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden">
      {sections.map(({ id, Component }, index) => (
        <div key={id} className={`absolute inset-0 transition-all duration-800 ease-in-out ${getTransform(index)} ${index === activeSection ? "z-20" : "z-10"}`}>
          <div ref={(el) => (scrollerRefs.current[index] = el)} className="h-full overflow-y-auto">
            <Component showModal={showModal} />
          </div>
        </div>
      ))}
    </div>
  );
};
