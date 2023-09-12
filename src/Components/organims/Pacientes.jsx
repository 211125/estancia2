import React from "react";
// import LinesChart from '../../Graficas/LinesChart'
import LinesChart from "../../Graficas/LinesChart";
import Bars from "../../Graficas/BarsChart";
import Pies from "../../Graficas/PiesChart";
import { Link } from "react-router-dom";
import Navbar from "../Molecules/Navbar";

function Pacientes() {
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

        <label>Dirección  </label>
        <input type="text" />
        
        <label>Género</label>
        <input type="text" />

        <label>Correo Electrónico</label>
        <input type="text" />

        <label>Estado Civil</label>
        <input type="date" />

        <label>Ocupación</label>
        <input type="time" />

        <label>Calificaciones</label>
        <input type="text" />

        <button >Agregar</button>
      </div>
    </>
  );
}

export default Pacientes;
