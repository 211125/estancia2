import React from 'react'
import '../../assets/Styles/Cards.css'

function Card({Number, graphv2, img}) {
  return (
    <div className='container-cards'>
        <div className='image-card'>
            <img src={img} alt="" />
        </div>

        <div className='text-number'>
            <div className='number'>{Number}</div>
            <p>{graphv2}</p>
        </div>
    </div>
  )
}

export default Card