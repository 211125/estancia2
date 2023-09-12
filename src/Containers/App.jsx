import React from 'react'

import { useState } from 'react'
import Navegador from './Navegador'



function App() {

  const [user, setUser] = useState([])

  return (
    <>
      {/* <HomeLanding /> */}
      {/* {
        !user.length > 0 
        ? <Login setUser={setUser}/>
        :   <Navegador/>
      }  */}
      <Navegador />
      {/* <Template/> */}
      
    </>
  )
}

export default App