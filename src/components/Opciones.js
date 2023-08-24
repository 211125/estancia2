import { Link } from 'react-router-dom';

const Opciones = () => {
    return (
        < >
            <div className='body'>
                <div class="menu ">

                    <input class="menu_input" id="btn2" name="menu" type="radio" />
                    <label class="menu_label" for="btn2">
                        <div class="fa fa-user"></div>
                        <div class="menu_text">
                            <Link to="/Pacientes" className='link-blanco'>users</Link>
                        </div>

                    </label>
                    <input class="menu_input" id="btn3" name="menu" type="radio" />
                    <label class="menu_label" for="btn3">
                        <div class="fa fa-calendar"></div>
                        <div class="menu_text">
                            consulta
                        </div>
                    </label>

                    <input class="menu_input" id="btn5" name="menu" type="radio" />
                    <label class="menu_label" for="btn5">
                        <div class="fa fa-user-md"></div>
                        <div class="menu_text">

                            <Link to="/Pacientes" className='link-blanco'>Paciente</Link>
                        </div>
                    </label>
                    <input class="menu_input" id="btn4" name="menu" type="radio" />
                    <label class="menu_label" for="btn4">
                        <i className="fas fa-sign-out-alt"></i>
                        <div class="menu_text">
                            <Link to="/" className='link-blanco'>cerrar</Link>

                        </div>
                    </label>
                </div>
            </div>
        </>
    )
}
export default Opciones;