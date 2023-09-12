import React from 'react'
import Title from '../atoms/Title'
import Paragraph from '../atoms/Paragraph'
import Button from '../atoms/Button'
import meteorito from '../../assets/Images/Meteoro.png'
import doctor from '../../assets/Images/Hola.png'
import '../../assets/Styles/Presentation.css'

function Presentation() {
    return (
        <div>
            {/* <Navbar/> */}
            <div className='conatiner-show'>
                <div className='image-show'>
                    <img src={doctor} alt="" />
                </div>
                <div className='Text-show'>
                    <Title level="h1" text="Bienvenido" />
                    <Paragraph graph="Dr. Christian Cancino Cubias Cirujano - Urólogo" />
                    <div className='btn-show'>
                        <Button msn="Ver Citas" link="#seccion" />
                        <Button className="btn2" msn="Ver Pacientes" classNames="btn22" link="#seccion2" />
                    </div>

                </div>

                <div className='image-meteori'>
                    <img src={meteorito} alt="" />
                </div>

            </div>
        </div>
    )
}

export default Presentation