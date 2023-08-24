import React from "react";

const MenuPaciente = () => {
    return (
        <div>
            <nav>
                <div class="dot"></div>
                <ul>
                    <li class="active"><a href="/Home">citas</a></li>
                    <li><a href="user">user</a></li>
                    <li><a href="/Pacientes">paciente</a></li>
                    <li><a href="/CrearPacientes">CrearPacientes</a></li>
                    <li><a href="/">cerrar sesion </a></li>
                </ul>
            </nav>
        </div>
    );
};


export default MenuPaciente;
