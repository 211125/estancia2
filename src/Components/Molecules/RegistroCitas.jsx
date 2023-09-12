import React from "react";
import { useRef } from "react";
import Navbar from "./Navbar";
import "../../assets/Styles/Cards.css"
function RegistroCitas() {
  
  return (
    <>
      <Navbar />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="container-form">
        <label>Nombre del paciente</label>
        <input type="text" />

        <label>Apellido Materno</label>
        <input type="text" />

        <label>Apellido Paterno</label>
        <input type="text" />

        <label>Fecha de Nacimiento:</label>
        <input type="date" />

        <label>Telefono celular:</label>
        <input type="text" />

        <label>Telefono de casa</label>
        <input type="text" />

        <label>Correo electronico</label>
        <input type="text" />

        <label>Fecha de la cita:</label>
        <input type="date" />

        <label>Hora de la cita:</label>
        <input type="time" />

        <label>Nombre de la oficina</label>
        <input type="text" />

        <label>quien recomienda</label>
        <input type="text" />

        <label>Motivo de la consulta</label>
        <input type="text" />


        <button >Agregar</button>
      </div>
    </>
  );
}

export default RegistroCitas;
