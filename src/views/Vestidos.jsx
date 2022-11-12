
import "../index.css"
import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import Cards from "../componentes/Cards"
import React, {useState, useEffect, useContext } from 'react'
import Context from '../Contenxt'


const Vestidos = () => {
  const{tienda} = useContext (Context);




  return (
    <>
      <NavBar/>

      <div className="container d-flex justify-content-center mt-3 mx-4">
        <h5 className="titleCat">Vestidos</h5>
      </div>
      <hr/>

      <div className="galeria grid-columns-4 p-3">
      
        
          <Cards/>
         
          

      </div>




      <Footer/>
    </>
  )
}

export default Vestidos