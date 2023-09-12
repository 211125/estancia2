import React from 'react'
import { Link } from 'react-router-dom'
import '../../assets/Styles/Navbar.css'

function Navbar() {


    return (

        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                {/* <a class="navbar-brand" href="#">Galaxia</a> */}
                <button class="navbar-toggler bg-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon icono"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <a class="navbar-brand title" href="#">Dr. Christian</a>
                    <ul class="navbar-nav">
                        <li class="nav-item">

                            <Link exact to="/home" className='link'><a class="nav-link" href="#">HOME</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link exact to="/pacientes" className='link'><a class="nav-link" href="#">PACIENTES</a></Link>
                        </li>
                        <li class="nav-item">
                            <Link to="/registro" className='link'><a class="nav-link" href="#">CITAS</a></Link>
                        </li>

                    </ul>

                    <div className='btnChido'>
                        <Link to="/" className='link'><button href="#">Cerrar la sesión</button></Link>
                    </div>

                </div>
            </div>
        </nav>
    )
}


export default Navbar