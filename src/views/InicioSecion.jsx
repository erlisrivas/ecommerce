import React from 'react'
import { Link } from "react-router-dom";
import "../assets/css/iniciosecion.css"

const InicioSecion = () => {
  return (

    <div className="bodyLogin h-100">

      <div className="login h-100">

        <div className="login-form h-100">

          <h1>Marketplace</h1>
          <p>Bienvenido a Marketplace</p>
          <form className="p-4">
            <div className="form-outline mb-4">
              <input type="email" id="form2Example1" className="form-control" />
              <label className="form-label" >Correo</label>
            </div>
            <div className="form-outline mb-4">
              <input type="password" id="form2Example2" className="form-control" />
              <label className="form-label" >Contraseña</label>
            </div>
            <div className="row mb-4">
              <div className="col">
              <a href="#!">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            <button type="submit" className="btn btn-block mb-4"><Link className="t"to="/Home">Ingresa a tu cuenta</Link></button>
            <div className="d-flex justify-content-around">
              <p>Aun no estas registrado?</p><Link to="/Registro">Registrate</Link>
            </div>
          </form> 
        </div>
      </div>

      <div className="nav p-4 justify-content-end">
      
     
      </div>
      
     
    </div>
    
  )
}

export default InicioSecion