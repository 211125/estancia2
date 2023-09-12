import React from 'react'
import { Route, Routes} from 'react-router-dom'
import HomeLanding from '../Pages/HomeLanding'
import Login from '../Components/organims/Login'
import Pacientes from '../Components/organims/Pacientes'
import RegistroCitas from '../Components/Molecules/RegistroCitas'

function Navegador() {
  return (
    <>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/home' element={<HomeLanding />} />
          <Route path='/pacientes' element={<Pacientes/>} />        
          <Route path='/registro' element={<RegistroCitas/>} />
       
          
        </Routes>
    </>
  )
}

export default Navegador