import React from 'react'
import Presentation from '../Components/organims/Presentation';
import ExploreUnverse from '../Components/organims/ExploreUnverse';
import Footer from '../Components/organims/Footer';
import Navbar from '../Components/Molecules/Navbar';
import LinesChart from '../Components/organims/LinesChart';
import VerPacientes from '../Components/Molecules/VerPaciente';
import ExplorePaciente from '../Components/organims/ExplorePaciente';

function HomeLanding() {
  return (
    <>
      <Navbar/>
      <section data-aos="fade-right" data-aos-duration="2000" data-aos-easing="ease-in-out">
        <Presentation />
      </section>
      <ExploreUnverse/>
    
      <ExplorePaciente/>
    
    </>
  )      
  
}

export default HomeLanding;