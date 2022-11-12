import React from 'react'
import { Link } from "react-router-dom";
import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'


const Home = () => {
  return (
    <>
      <NavBar/>
      <Header/>

      <div className="container-fluid d-flex justify-content-end m-0 p-4">
        <Link to="/CrearPub">
          <button 
          className="btn btn-outline-primary" 
          type="button">
          Vender nuevo producto 
          <i className="fa-duotone fa-cart-shopping-fast"></i>
          </button>
        </Link>
      </div>

      <div className="col-12 col-md-6 mb-4 mx-5 justify-content-center" style={{width:'200px'}}>
                    <select className="form-select" aria-label="Default select example">
                      <option selected>Ordenar por</option>
                      <option value="1">Pecio de menor a mayor</option>
                      <option value="2">Precio de mayor a menor</option>
                    </select>
                  </div>
     
  
      <Footer/>
      </>
      
  )
}

export default Home