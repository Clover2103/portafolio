import React from "react";
import image from "../../assets/home/home/cristian home.png";
import background from "../../assets/home/home/background cristian home - copia.png";
import "./SeccionHome.css";

const SeccionHome = () => {
  let experienceDate = new Date("2022-07-30"); 
  let today = new Date(); 
  let diff = today - experienceDate;
  let years = diff / (1000 * 60 * 60 * 24 * 365);

  return (
    <div
      id="inicio"
      className="w-full min-h-[110vh] relative z-10 overflow-hidden"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-[calc(110vh-7.5rem)] sm:min-h-[calc(100vh-7.5rem)] lg:w-[calc(100%-9.99rem)] w-[calc(100%)] lg:left-40 top-30 left-0 relative lg:absolute z-10 flex justify-start items-end ptb-16 wt-850 mtb-16">
        <div className="max-w-full sm:max-w-[480px] text-justify hyphens-auto text-white p-5 sm:pl-12 z-50">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-medium font-bebas mp-0">Cristian.</h1>
          <h3 className="text-base sm:text-[20px] md:text-2xl font-bold font-roboto mp-1">Desarrollador Full Stack</h3> <br />
          <p className="text-sm md:text-base font-roboto">Ingeniero en sistemas con {years.toFixed(0)}+ años en desarrollo full stack, enfocado en crear aplicaciones eficientes y funcionales.</p> <br />
          <p className="text-sm md:text-base font-roboto">Desde Bogotá, Colombia — ¡gracias por visitar mi portafolio!</p>
        </div>
        <img src={image} className="absolute left-25 sm:left-1/5 md:left-1/2 lg:left-1/3 top-0.5 sm:top-[calc(20px)] lg:top-0.5 w-[400px] sm:w-[550px] md:w-[500px] lg:w-[calc(700px)] z-10" alt="" />
      </div>
    </div>
  );
};

export { SeccionHome };
