import React, { useState} from 'react'
import { Link} from "react-router-dom";
import "../assets/css/iniciosecion.css"
import { useNavigate } from "react-router-dom";
import { useContext } from 'react'
import Context from "../Context"

import logoN from "../assets/img/logoN.png"

const InicioSecion = () => {
  const{tienda, usuario, setAuth, setUsu} = useContext (Context);
  const [correo, setCorreo] = useState("");
  const [clave, setClave] = useState("");

  const [error, setError] = useState (false);
  const Navigate = useNavigate ();


  
const validarDatos = (e) =>{
  e.preventDefault();
  const found = usuario.find((i) => 
  i.correo === correo && i.clave === clave);
    if (found){
      setAuth(true);
      setUsu(found);
      Navigate("/Home")
      tienda.forEach(e => {
        if (
          found.liked?.includes(e.id)
        ){
          e.liked = true 
        }else{
          e.liked = false
        }
      })
     
    } if (correo === "" || clave === ""){
      alert ("debe ingresar todos los datos")
      
    }
    else{
    setError(true);
    
  }
}



  return (

    <div className="bodyLogin">

      <div className="login">

        <div className="login-form">
          <img className="mt-4"src={logoN} height="55" width="90" alt=""/>
          <br/>
          <p>Bienvenido a Marketplace</p>

          <form className="p-4" onSubmit={validarDatos}>
            <div className="form-outline mb-2">
              <input type="email" 
                className="form-control"
                value={correo}
                onChange = {(e) => setCorreo(e.target.value)}
                />
              <label className="form-label" >Correo</label>
            </div>
          
            <div className="form-outline mb-2">
              <input type="password"
                className="form-control" 
                value={clave}
                onChange = {(e) => setClave(e.target.value)}/>
              <label className="form-label" >Contraseña</label>
            </div>
            {error?<p className="small text-danger p-0">Credenciales invalidas</p>: null}
            <div className="row mb-4 mt-4">
              <div className="col">
              <a href="">¿Olvidaste tu contraseña?</a>
              </div>
            </div>
            <button type="submit" className="btn btn-block mb-4 mt-4">Ingresa a tu cuenta</button>
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