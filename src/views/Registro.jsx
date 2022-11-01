import React from 'react'
import "../assets/css/registro.css"
import img5 from "../assets/img/img5.jpg"

const Registro = () => {
  return (
    <section className="intro">
    <div className="bg-image h-100" style={{backgroundImage: `url(${img5})`}}>
      <div className="mask d-flex align-items-center h-100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-7 col-xl-6">
              <div className="card mask-custom">
                <div className="card-body p-5 text-white">
  
                  <div className="my-4">
  
                    <h2 className="text-center mb-5">Registro</h2>
  
                    <form>
                      
                      <div className="row">
                        <div className="col-12 col-md-6 mb-4">
                          <div className="form-outline form-white">
                            <input type="text" id="form3Example1" className="form-control form-control-lg" />
                            <label className="form-label">Nombre</label>
                          </div>
                        </div>
                        <div className="col-12 col-md-6 mb-4">
                          <div className="form-outline form-white">
                            <input type="text" id="form3Example2" className="form-control form-control-lg" />
                            <label className="form-label" >Apellido</label>
                          </div>
                        </div>
                      </div>
  
                     
                      <div className="form-outline form-white mb-4">
                        <input type="email" id="form3Example3" className="form-control form-control-lg" />
                        <label className="form-label" >Correo</label>
                      </div>
  
                      
                      <div className="form-outline form-white mb-4">
                        <input type="password" id="form3Example4" className="form-control form-control-lg" />
                        <label className="form-label" >Contraseña</label>
                      </div>

                   
                      <button type="submit" className="btn btn-light btn-block mb-4">Registrarme</button>
  
                     
                      <div className="text-center">
                        <p>Siguenos en nuesras redes:</p>
                        <button type="button" className="btn btn-light btn-floating mx-1">
                          <i className="fab fa-facebook-f"></i>
                        </button>
  
                        <button type="button" className="btn btn-light btn-floating mx-1">
                          <i className="fab fa-google"></i>
                        </button>
  
                        <button type="button" className="btn btn-light btn-floating mx-1">
                          <i className="fab fa-twitter"></i>
                        </button>
  
                        <button type="button" className="btn btn-light btn-floating mx-1">
                          <i className="fab fa-github"></i>
                        </button>
                      </div>
                    </form>
  
                  </div>
  
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

export default Registro