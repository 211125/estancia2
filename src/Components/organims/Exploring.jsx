import React from 'react'
import Title from '../atoms/Title';
import Paragraph from '../atoms/Paragraph';
import Card from '../Molecules/Card';

import '../../assets/Styles/TextExplore.css'
import virus from '../../assets/Images/virus.png'
import botella from '../../assets/Images/botella.png'
import cubre from '../../assets/Images/cubre.png'
import otro from '../../assets/Images/team.png'

function Exploring() {
  return (
    <div className='container-Explore'>
      <div className='subTitleV1' data-aos="zoom-in" data-aos-duration="1200">
        <h3>Enim quis est voluptatibus aliquid consequatur fugiat</h3>
        <p>Direct repair of aneurysm, pseudoanerysm, of excision (paartial or total) and graft insertion</p>
      </div>

      <div className='conatiner-boxi'>
        <div data-aos="zoom-out" data-aos-duration="2000">
          <Card img={virus}  Number="1" graphv2="Direct repair of aneurysm, pseudoanerysm, of excision (paartial or total) and graft insertion" /> 
        </div>
        <div  data-aos="zoom-out-down" data-aos-duration="2000">
          <Card img={otro}  Number="2" graphv2="Direct repair of aneurysm, pseudoanerysm, of excision (paartial or total) and graft insertion" />  
        </div>
        <div data-aos="zoom-out" data-aos-duration="2000">
          <Card img={cubre}  Number="3" graphv2="Direct repair of aneurysm, pseudoanerysm, of excision (paartial or total) and graft insertion" />   
        </div>
      </div>
    </div>
  )
}

export default Exploring;