import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login({setUser}) {

  const [nombre, setNombre] = useState("")
  const [contraseña, setContraseña] = useState("")
  const [error, setError] = useState(false)


  const handleSubmit = (e) => {
    e.preventDefault()

    if(nombre == "" || contraseña == ""){
      setError(true)
      history.push('/HomeLanding')
      return
    }

    setError(false)

    setUser([nombre])
  }

  return (
    <>
      <div class="container login_container">
        <div class="row justify-content-center mt-5">
          <div class="col-md-6">
            <div class="card ">
                <div className='titles-login'>
                  <h1>LOGIN</h1>
                </div>
              <div class="card-body ">
                <div class="text-center md-5 ">
                    {/* <img src="./src/img/Up.jpg" alt=""  width="135px" class="flex-1 rounded align-center justify-content-center ">  */}
                </div>
                <form className='form' onSubmit={handleSubmit}>
                  <div class="mb-3 inputs">
                    <label for="correo" class="form-label">Correo electrónico</label>
                    <input type="text" value={nombre} onChange={e => setNombre(e.target.value)}  class="form-control" placeholder="Ingresa tu correo electrónico" />
                  </div>
                  <div class="mb-3 inputs">
                    <label for="contraseña" class="form-label">Contraseña</label>
                    <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)}  class="form-control"  placeholder="Ingresa tu contraseña" />
                  </div>
                  <Link to="/home"><button  type="submit" class="btn ">Enviar</button></Link>
                  
                </form>
                {error && <p>Todo los compos son obligatorio</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login

