import React from 'react'
import Carrusel from '../Molecules/Carrusel'
import cora from '../../assets/Images/cora.png'
import CardService from '../Molecules/CardService'

function ExploreUnverse() {
    return (
        <div className='conatiner-carrusel' id="seccion"  >
            <h1 data-aos="zoom-in" data-aos-duration="2000">Citas Agendadas</h1>

            <div className='box-row-carrusel' >
            <CardService/>
            </div>

        </div>
    )
}

export default ExploreUnverse