import React from 'react'

import Context from '../../Context'
import { useContext } from 'react'

const UsuarioInfo = () => {
  const{usu} = useContext (Context)
  return (
    <>
      
        <div className="text-capitalize">
          <h3 >Información de usuario</h3>
        </div>

        <div className="">

            <div className ="container mt-5">
              <div className ="card-mb-3 estilos">
                <div className ="row g-0">
                  <div className ="col-md-6 mb-4">
                  <img 
                  src ={usu.photo}
                  className= "img-fluid estilos rounded-start"
                  alt = "img1"
                  width={350}
                  />
                </div>
                <div className="col-md-6">
                  <div className="card-body aling-content-center">
                    <h3 className="card-title text-capitalize">{usu.nombre}{"  "}{usu.apellido}</h3>  
                    <hr/>
                    <p className="card-text">{usu.correo}</p>
                    <p className="card-text">Telefono: {usu.phono}</p>
                    <p className="card-text">Dirección: {usu.direccion}</p>
                  </div>
                </div>
              </div>
            </div>
      
        </div>
      </div>
          
    </>
  )
}

export default UsuarioInfo