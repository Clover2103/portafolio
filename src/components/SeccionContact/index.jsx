import React, { useState } from "react";
import "./SeccionContact.css";
import back from "../../assets/home/contact/background criss logo.jpg"

const SeccionContact = () => {
  const [form, setForm] = useState({ nombre: "", correo: "", mensaje: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const result = await response.json();
      if (result.success) {
        alert("Correo enviado correctamente ✅");
        setForm({ nombre: "", correo: "", mensaje: "" });
      } else {
        alert("Error al enviar el correo ❌");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error en la conexión con el servidor.");
    }
  };

  return (
    <div
      className="w-full min-h-[calc(100vh)] relative "
      id="contacto"
      style={{
        backgroundImage: `url(${back})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="min-h-[calc(100vh-7.5rem)] lg:w-[calc(100%-9.99rem)] w-[calc(100%)] lg:left-40 relative lg:absolute top-30 left-0 z-10 flex lg:flex-row flex-col justify-end items-center ptb-16 mtb-16">
        <form
          onSubmit={handleSubmit}
          className="max-w-[calc(400px)] min-h-[calc(100%)] flex flex-col justify-center items-center"
        >
          <h1 className="font-bold text-4xl text-white">CONTACTO</h1>
          <p className="text-left text-lg min-w-[calc(280px)] mb text-white">
            Tomémonos un café y comencemos a conversar.
          </p>

          <input
            type="text"
            name="nombre"
            value={form.nombre}
            onChange={handleChange}
            className="rounded-md border-b-2 mb focus:outline-none h-[calc(50px)] min-w-[calc(270px)] sm:min-w-[calc(300px)] md:min-w-[calc(400px)] text-white pa"
            placeholder="Nombre*"
            required
          />

          <input
            type="email"
            name="correo"
            value={form.correo}
            onChange={handleChange}
            className="rounded-md border-b-2 mb focus:outline-none min-w-[calc(270px)] sm:min-w-[calc(300px)] md:min-w-[calc(400px)] h-[calc(50px)] text-white pa"
            placeholder="Correo electrónico*"
            required
          />

          <textarea
            name="mensaje"
            value={form.mensaje}
            onChange={handleChange}
            className="rounded-md border-b-2 mb focus:outline-none min-w-[calc(270px)] sm:min-w-[calc(300px)] md:min-w-[calc(400px)] h-[calc(150px)] text-white pa"
            placeholder="Mensaje*"
            required
          />

          <button
            type="submit"
            className="bg-black text-white rounded-md h-[calc(40px)] min-w-[270px] sm:min-w-[300px] md:min-w-[400px] cursor-pointer"
          >
            ENVIAR
          </button>
        </form>
      </div>
      <div className="absolute bg-black opacity-80 w-full h-full">

      </div>
    </div>
  );
};

export { SeccionContact };
