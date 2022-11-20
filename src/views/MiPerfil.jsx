import React from 'react'
import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import Favoritos from '../componentes/informacionPerfil/Favoritos'
//import UsuarioInfo from '../componentes/informacionPerfil/UsuarioInfo'


import Context from "../Context"
import { useContext } from 'react'

import "../assets/css/miperfil.css"


const MiPerfil = () => {
  const{logout, usu} = useContext (Context)

  console.log (usu)
  return (
      <>
        <NavBar/>

        <div className="container d-flex justify-content-center mt-3 mx-4">
        <h4 className="titleCat">Mi Perfil</h4>
        </div>
        <hr/>

        <div className="contenedorPerfil d-flex">

          <div className="barra-usuario h-100">
            <div className="name-img d-flex justify-content-start">
              <img src={usu.photo} className="rounded-circle" height="52" width="52"
                  alt="" />
              <div className="nUsu align-items-center mx-4">
                <p><strong>{usu.nombre}{"  "}{usu.apellido}</strong></p>
              </div>
            </div>
            <div className="menu-usuario d-flex flex-column">
              <p>Información de usuario</p>
              <p>Mis Favoritos</p>
              <p>Mis Publicaciones</p>
              <p>Agregar nueva publicación</p>
              <p>Editar Información de usuario</p>
              <br/><hr/>
              <button className=""onClick={logout}>Cerrar Cesión</button>
            </div>
          </div>

          <div className="main-usuario d-flex-colunm">
          <Favoritos/>
          </div>
            
        </div>
        <Footer/>
      </>
  )
}

export default MiPerfil