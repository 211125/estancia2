import React, { useState } from "react";
import MenuPaciente from "../components/MenuPaciente";
import Logo from '../styles/img/1053244.png';

const User = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleDropdown = (index) => {
        if (activeIndex === index) {
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
        }
    };

    const pacientesData = [
        {
            nombre: "Juan",
            apellidoPaterno: "García",
            apellidoMaterno: "López",
            fechaNacimiento: "15/03/1990",
            telefonoCelular: "(123) 456-7890",
            telefonoCasa: "(234) 567-8901",
            direccion: "Calle 123, Ciudad",
            genero: "Masculino",
            correoElectronico: "juan@example.com",
            estadoCivil: "Soltero(a)",
            ocupacion: "Ingeniero",
            calificaciones: "5 estrellas",
        },
        {
            nombre: "María",
            apellidoPaterno: "Martínez",
            apellidoMaterno: "Sánchez",
            fechaNacimiento: "25/06/1985",
            telefonoCelular: "(345) 678-9012",
            telefonoCasa: "(456) 789-0123",
            direccion: "Avenida 456, Otra Ciudad",
            genero: "Femenino",
            correoElectronico: "maria@example.com",
            estadoCivil: "Casado(a)",
            ocupacion: "Profesora",
            calificaciones: "4.5 estrellas",
        },
        // ...más pacientes
    ];
    const handleDelete = () => { }

    return (
        <>
            <div >
                <MenuPaciente />
                <main className="fondo">
                    <nav>
                        <a href="#" className="profile">
                        </a>
                    </nav>
                    <main>
                        <div className="table-data">
                            <div className="order">
                                <div className="head">
                                    <h3>lista de </h3>
                                    <h3>usuarios</h3>

                                </div>
                                <br></br>
                                <br></br>

                                <div className='row'>
                                    {pacientesData.map(data => (


                                        <div class='product--blue' key={data.id}>
                                            <div class='product_inner'>
                                                <img src={Logo} width='300' />
                                                <p>{data.nombre} {data.apellidoPaterno} {data.apellidoMaterno}</p>
                                                <p>fecha de nacimiento {data.fechaNacimiento}</p>
                                                <p>telefono celular {data.telefonoCelular}</p>
                                                <p>telefono de casa{data.telefonoCasa}</p>
                                                <p>direccion{data.direccion}</p>
                                                <p>genero{data.genero}</p>
                                                <p> correoElectronico {data.correoElectronico}</p>
                                                <p>ocupacion {data.ocupacion}</p>
                                                <p>calificaciones{data.calificaciones}</p>

                                                <button onClick={() => handleDelete()}>Eliminar</button>
                                                <button onClick={() => handleDelete()}>actualizar</button>

                                            </div>

                                            <div class='product_overlay'>
                                                <h2>Added to basket</h2>
                                                <i class='fa fa-check'></i>
                                            </div>
                                        </div>




                                    ))}
                                </div>
                            </div>

                        </div>
                    </main>
                </main>
            </div>

        </>
    );
};

export default User;
