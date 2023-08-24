import MenuPaciente from "../components/MenuPaciente";

const CrearPacientes = () => {
    return (
        <>
            <MenuPaciente />
            <div id="container">
                <h1>&bull; Keep in Touch &bull;</h1>
                <div className="underline"></div>
                <div className="icon_wrapper">
                    <div className="icon">
                        <i className="fas fa-user-plus" style={{ fontSize: '2rem' }}></i>
                    </div>
                </div>
                <form action="#" method="post" id="contact_form">
                    <div className="name">
                        <label htmlFor="name">Nombre</label>
                        <input type="text" placeholder="Juan" name="nombre" id="name_input" required />
                    </div>
                    
                    <div className="name">
                        <label htmlFor="apellidoPaterno">Apellido Paterno</label>
                        <input type="text" placeholder="apellidoPaterno" name="apellidoPaterno" id="apellidoPaterno_input" required />
                    </div>
                    <div className="apellidoMaterno">
                        <label htmlFor="apellidoMaterno">Apellido Materno</label>
                        <input type="text" placeholder="López" name="apellidoMaterno" id="apellidoMaterno_input" required />
                    </div>
                    <div className="fechaNacimiento">
                        <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
                        <input type="text" placeholder="15/03/1990" name="fechaNacimiento" id="fechaNacimiento_input" required />
                    </div>
                    <div className="telefonoCelular">
                        <label htmlFor="telefonoCelular">Teléfono Celular</label>
                        <input type="text" placeholder="(123) 456-7890" name="telefonoCelular" id="telefonoCelular_input" required />
                    </div>
                    <div className="telefonoCasa">
                        <label htmlFor="telefonoCasa">Teléfono Casa</label>
                        <input type="text" placeholder="(234) 567-8901" name="telefonoCasa" id="telefonoCasa_input" required />
                    </div>
                    <div className="direccion">
                        <label htmlFor="direccion">Dirección</label>
                        <input type="text" placeholder="Calle 123, Ciudad" name="direccion" id="direccion_input" required />
                    </div>
                    <div className="genero">
                        <label htmlFor="genero">Género</label>
                        <input type="text" placeholder="Masculino" name="genero" id="genero_input" required />
                    </div>
                    <div className="correoElectronico">
                        <label htmlFor="correoElectronico">Correo Electrónico</label>
                        <input type="email" placeholder="juan@example.com" name="correoElectronico" id="correoElectronico_input" required />
                    </div>
                    <div className="estadoCivil">
                        <label htmlFor="estadoCivil">Estado Civil</label>
                        <input type="text" placeholder="Soltero(a)" name="estadoCivil" id="estadoCivil_input" required />
                    </div>
                    <div className="ocupacion">
                        <label htmlFor="ocupacion">Ocupación</label>
                        <input type="text" placeholder="Ingeniero" name="ocupacion" id="ocupacion_input" required />
                    </div>
                    <div className="calificaciones">
                        <label htmlFor="calificaciones">Calificaciones</label>
                        <input type="text" placeholder="5 estrellas" name="calificaciones" id="calificaciones_input" required />
                    </div>
                    <div className="submit">
                        <input type="submit" value="Enviar Datos" id="form_button" />
                    </div>
                </form>
            </div>
        </>
    );
};

export default CrearPacientes;
