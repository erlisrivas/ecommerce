import React from 'react'
import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import Listaproductos from '../componentes/Listaproductos'

import "../assets/css/miperfil.css"

const MiPerfil = () => {
  return (
      <>
        <NavBar/>

        <div className="container d-flex justify-content-center mt-3 mx-4">
        <h4 className="titleCat">Mi Perfil</h4>
        </div>
        <hr/>

        <div className="contenedorPerfil d-flex">

          <div className="barra-usuario">
            <div className="name-img d-flex justify-content-around">
              <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="52"
                  alt="" />
              <p><strong>Nombre de usuario</strong></p>
            </div>
            <div className="menu-usuario d-flex flex-column">
              <p>Mis Compras</p>
              <p>Mis Favoritos</p>
              <p>Mis Publicaciones</p>
              <p>Agregar nueva publicación</p>
              <p>Editar Información de usuario</p>
              <br/><hr/>
              <p>Cerrar Cesión</p>
            </div>
          </div>

          <div className="main-usuario">
            <h4>Mis Favoritos</h4>
            <Listaproductos/>
          </div>
        </div>
        <Footer/>
      </>
  )
}

export default MiPerfil