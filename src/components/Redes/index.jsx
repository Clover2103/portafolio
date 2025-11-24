import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

const Redes = () => {
  return (
    <div className="fixed w-36 h-[calc(100vh-8rem)] top-32 left-0 flex flex-col justify-center items-center gap-6">
      <div className="flex flex-col h-full w-full justify-around items-center">
        <div className="h-[calc(80%)] flex flex-col justify-center items-center gap-2">
          <div className="h-[calc(35%)] w-1 bg-black rounded-2xl"></div>
          <div className="gap-2 flex flex-col">
            <IoLogoWhatsapp className="w-7 h-7 cursor-pointer"/>
            <FaLinkedin className="w-7 h-7 cursor-pointer"/>
            <IoIosMail className="w-7 h-7 cursor-pointer"/>
          </div>
          <div className="h-[calc(35%)] w-1 bg-black rounded-2xl"></div>
        </div>
        <div>
          <p>Pie de pagina</p>
        </div>
      </div>
    </div>
  );
};

export { Redes };