import React from 'react'
import Carrusel from '../Molecules/Carrusel'
import cora from '../../assets/Images/cora.png'
import CardService from '../Molecules/CardService'
import VerPacientes from '../Molecules/VerPaciente'

function ExplorePaciente() {
    return (
        <div className='conatiner-carrusel' id="seccion2"  >
            <h1 data-aos="zoom-in" data-aos-duration="2000">Pacientes</h1>

            <div className='box-row-carrusel' >
            <VerPacientes/>
            </div>

        </div>
    )
}

export default ExplorePaciente