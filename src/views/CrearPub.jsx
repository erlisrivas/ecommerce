import React from 'react'
import "../assets/css/registro.css"
import img5 from "../assets/img/img5.jpg"

const CrearPub = () => {
  return (
    <section className="intro">
  <div className="bg-image-vertical h-100" style={{backgroundImage: `url(${img5})`}}
        >
    <div className="mask d-flex align-items-center h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card" style={{bordeRadius: '1rem'}}>
              <div className="card-body p-5">

                <h1 className="mb-5 text-center">Ingresar datos del producto</h1>

                <form>

                <div className="form-outline mb-4">
                <input type="file" id="form6Example1" className="form-control" />
                    <label className="form-label" >Agregar Fotos</label>
                  </div>
                 
                  <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Categoría</option>
                      <option value="1">Vestidos</option>
                      <option value="2">Enteritos</option>
                      <option value="3">Pantalon</option>
                      <option value="3">Jardineras</option>
                    </select>
                    </div>
                    <div className="col-12 col-md-6 mb-4">
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Estado</option>
                      <option value="1">Nuevo</option>
                      <option value="2">Usado</option>
                    </select>
                  </div>
                  </div>

                  
                  <div className="form-outline mb-4">
                    <input type="text" id="form6Example3" className="form-control" />
                    <label className="form-label" >Nombre del producto</label>
                  </div>

                 
                  <div className="form-outline mb-4">
                    <input type="number" id="form6Example4" className="form-control" />
                    <label className="form-label" >Precio del producto</label>
                  </div>

                  <div className="form-outline mb-4">
                  
                  <h6>Selecciona la talla disponible:</h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    <label className="form-check-label" for="flexCheckIndeterminate">
                    XS
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    <label className="form-check-label" for="flexCheckIndeterminate">
                    S
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    <label className="form-check-label" for="flexCheckIndeterminate">
                    M
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    <label className="form-check-label" for="flexCheckIndeterminate">
                    XL
                    </label>
                  </div>
                  
                  </div>

              
                  <button type="submit" className="btn btn-secondary btn-rounded btn-block">Crear Publicación</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default CrearPub