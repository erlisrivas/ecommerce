import React from 'react'
import "../assets/css/miperfil.css"
import {useState } from 'react';
import { useContext } from 'react'
import Context from "../Context"


import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import Favoritos from '../componentes/informacionPerfil/Favoritos'
import Publicaciones from '../componentes/informacionPerfil/Publicaciones'


const MiPerfil = () => {

  const{usu, setUsu} = useContext (Context)

  const [nombre, setNombre] = useState ("");
  const [apellido, setApellido] = useState ("");
  const [correo, setCorreo] = useState ("");
  const [phono, setPhono] = useState ("");
  const [direccion, setDireccion] = useState ("");
  const [photo, setPhoto] = useState ("");
  const [modoedicion, setModoEdicion] = useState(false);

  const captInfo = (object) => {
    setNombre (object.nombre)
    setApellido (object.apellido)
    setCorreo (object.correo)
    setPhono (object.phono)
    setDireccion(object.direccion)
    setPhoto (object.photo)

    setModoEdicion (true)
  }

  const editInfo = (e) =>{
    e.preventDefault();
    const editado = usu.nombre == nombre ? usu : {nombre, apellido, correo, phono, direccion, photo};
    
    setUsu(editado)
      setModoEdicion (false);
      setNombre ("");
      setApellido ("");
      setCorreo ("");
      setPhono ("");
  }

  return (
      <>
    <NavBar/>

    <div className="container d-flex justify-content-center mt-3 mx-4">
      <h4 className="titleCat">Mi Perfil</h4>
    </div>
    <hr/>
    
    <div className="generalContainer">

      <div className="d-flex flex-column aling-content-center">

        <div className="text-capitalize mb-4 mx-5">
          <h4 >Información de usuario</h4>
        </div>
        <div className="contenedorPerfil d-flex mx-2">
          <div className="barra-usuario h-100 ml-5">
            <div className="name-img d-flex justify-content-start">
              <img src={usu.photo} className="rounded-circle" height="52" width="52"
                  alt="" />
              <div className="nUsu align-items-center mx-4">
                <p><strong>{usu.nombre}{"  "}{usu.apellido}</strong></p>
              </div>
            </div>
            <div className="menu-usuario d-flex flex-column">
              <p>{usu.correo}</p>
              <p>Telefono: {usu.phono}</p>
              <p>Dirección: {usu.direccion}</p>
              <br/>
              <br/><hr/>
              <button onClick ={() => {captInfo(usu)}}className="">Editar información</button>
            </div>
          </div>

          <div className="main-usuario d-flex align-content-center mr-10 px-5">
          <form className="">
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <div className="form-group">
                  <label for="exampleInputEmail1">Nombre</label>
                  <input type="name" className="form-control"placeholder="Nombre"
                  value={nombre}
                  onChange = {(e) => setNombre(e.target.value)}/>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="form-group">
                  <label for="exampleInputPassword1">Apellido</label>
                  <input type="name" className="form-control" placeholder="Apellido"
                  value={apellido}
                  onChange = {(e) => setApellido(e.target.value)}/>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6 mb-4">
                <div className="form-group">
                  <label for="exampleInputPassword1">Correo</label>
                  <input type="email" className="form-control" placeholder="Correo"
                  value={correo}
                  onChange = {(e) => setCorreo(e.target.value)}/>
                </div>
              </div>
              <div className="col-12 col-md-6 mb-4">
                <div className="form-group">
                  <label for="exampleInputPassword1">Telefono </label>
                  <input type="text" className="form-control" placeholder="telefono"
                  value={phono}
                  onChange = {(e) => setPhono(e.target.value)}/>
                </div>
              </div>
            </div>
            
            <div className="form-group mb-4">
              <label for="exampleInputPassword1">Dirección </label>
              <input type="text" className="form-control" placeholder="direccion"
              value={direccion}
              onChange = {(e) => setDireccion(e.target.value)}/>
            </div>
          

            <div className="form-group mb-4">
              <label for="exampleInputPassword1">Foto </label>
              <input type="text" className="form-control" placeholder="foto"
              value={photo}
              onChange = {(e) => setPhoto(e.target.value)}/>
            </div>
          
            {modoedicion?(
            <button type="submit" className="btn btn-primary mt-2"
            onClick ={(e) =>{editInfo(e)}}>Editar</button>):null}
          </form>
        </div>
      </div>
    </div>
    <br/><hr/>
    <Favoritos/>
    <br/><hr/>
    <Publicaciones/>
    </div>

      
        <Footer/>
      </>
  )
}

export default MiPerfil