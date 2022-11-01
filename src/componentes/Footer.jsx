import React from 'react'
import { Link } from "react-router-dom";
import logoN from "../assets/img/logoN.png"




const Footer = () => {
  return (
    <>

<div className="container-fluid m-0 p-0">
  <footer
          className="text-center text-lg-start text-white"
          style={{backgroundColor: '#b279cf'}}
          >
    
    <div className="container p-4 pb-0">
     
      <section className="">
       
        <div className="row">
         
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
          <img className="my-4"src={logoN} height="35" alt="logo"/>
            <p>
              Tienda virtual donde podras comprar y vender de forma rápida
            </p>
          </div>
         
          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Categorías</h6>
            <p>
            <Link to="/Vestidos" className="text-white">Vestidos</Link>
            </p>
            <p>
            <Link to="/Jardineras" className="text-white">Jardineras</Link>
            </p>
            <p>
            <Link to="/Enteritos" className="text-white">Enteritos</Link>
            </p>
            <p>
            <Link to="/Pantalon" className="text-white">Pantalon</Link>
            </p>
          </div>
         

          <hr className="w-100 clearfix d-md-none" />

        
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Links de interes
            </h6>
            <p>
            <Link to="/MiPerfil" className="text-white">Mi perfil</Link>
            </p>
            <p>
            <Link to="/Carrito" className="text-white">Carrito de compras</Link>
            </p>
          </div>

          
          <hr className="w-100 clearfix d-md-none" />

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Contacto</h6>
            <p><i className="fas fa-home mr-3"></i> Av Marconi, Los Angeles</p>
            <p><i className="fas fa-envelope mr-3"></i> ekr@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 56 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 56 234 567 89</p>
          </div>
         
        </div>
        
      </section>
      

      <hr className="my-3"/>

      <section className="p-3 pt-0">
        <div className="row d-flex align-items-center">
        
          <div className="col-md-7 col-lg-8 text-center text-md-start">
           
            <div className="p-3">
              © 2020 Copyright:
              <a className="text-white"
                 >ekrmarketplace.com</a
                >
            </div>
            
          </div>
        
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            
            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i className="fab fa-facebook-f"></i
              ></a>

           
            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
               
               role="button"
               ><i className="fab fa-twitter"></i
              ></a>

            
            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
               role="button"
               ><i className="fab fa-google"></i
              ></a>

          
            <a
               className="btn btn-outline-light btn-floating m-1 text-white"
               
               role="button"
               ><i className="fab fa-instagram"></i
              ></a>
          </div>
       
        </div>
      </section>
      
    </div>
    
  </footer>
 
</div>

    </>
  )
}

export default Footer