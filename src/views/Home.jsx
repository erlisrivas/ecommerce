import React from 'react'
import { Link } from "react-router-dom";
import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'
import Cards from "../componentes/Cards"


const Home = () => {
  return (
    <>
      <NavBar/>
      <Header/>

      <div className="container-fluid d-flex justify-content-center m-0 p-4">
        <div className="row">
        
        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 ">
          <i className="fas fa-tags" width ="100" style ={{color: '#800080'}}></i>
          <Link to="/CrearPub" className="text-black"style ={{textDecoration: 'none'}}><h6 className="mt-2" >Vender Producto</h6></Link>
          <p className="mt-2">Ingresa un nuevo producto a tu catálogo</p>
        </div>
        
        
        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 ">
          <i className="fas fa-shopping-bag" style ={{color: '#800080'}}></i>
          <h6 className="mt-2">Mis Compras</h6>
          <p className="mt-2">Haz seguimiento de tus compras</p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3">
          <i className="fas fa-file-alt" style ={{color: '#800080'}}></i>
          <h6 className="mt-2">Contactanos</h6>
          <p className="mt-2">Te ayudamos con tus dudas y solicitudes</p>
        </div>
        
        <div className="col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 ">
          <i className="fas fa-laptop-house" style ={{color: '#800080'}}></i>
          <h6 className="mt-2">Tiendas y horarios</h6>
          <p className="mt-2">Revisa donde estan nuestras tiendas</p>
        </div>
        
        </div>
      </div>

      <div className="col-12 col-md-6 mb-4 mx-5 justify-content-center" style={{width:'200px'}}>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Ordenar por</option>
                      <option value="1">Pecio de menor a mayor</option>
                      <option value="2">Precio de mayor a menor</option>
                    </select>
                  </div>
     
  <Cards/>
      <Footer/>
      </>
      
  )
}

export default Home