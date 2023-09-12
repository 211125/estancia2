import React from 'react'
import '../../assets/Styles/Carrusel.css'

function Carrusel({subTitle, paragraph, subGraph, subGraphv2, learn}) {
  return (
    <div className='content-box'>
        <div className='content-texto'>
            <div className='subtitle'>
                <h3>{subTitle}</h3>
                <p>{paragraph}</p>
            </div>

            <div className='subParagraph'>
                <p>{subGraph}</p>
                <p className='subGraph'>{subGraphv2}</p>
                <a href="#">{learn}</a>
            </div>
        </div>  
    </div>
  )
}

export default Carrusel