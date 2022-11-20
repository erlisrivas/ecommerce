import React, { useContext } from 'react';
import Context from "../Context";

import {useEffect} from "react";
import {useState } from 'react';
import {useParams} from "react-router-dom";

import Button from 'react-bootstrap/Button';
import NavBar from "../componentes/NavBar";
import Footer from "../componentes/Footer"

const Detalle = () => {

  const {id} = useParams();
  const {tienda, add} = useContext (Context);
  const [productDetail, setProductoDetail] = useState ({});
 

  const obtenerDatos = () => { 
    const datosProducto = tienda.find((tienda) => tienda.id == id);
    setProductoDetail(datosProducto);
   
  };

  useEffect(() => {
    obtenerDatos();
  }, [tienda]);

  

  return (
    <>
    <NavBar/>

    <div className ="container mt-5">
            <div className ="card-m-3 p-3 border border-black">
              <div className ="row g-0">
                <div className ="col-md-6 mb-4">
                  <img 
                  src ={productDetail.img}
                  className= "img-fluid estilos rounded-start"
                  alt = "img1"
                  width={300}
                  />
                </div>
              <div className="col-md-4">
                <div className="card-body">
                  <h3 className="card-title text-capitalize">Camisa larga</h3>  
                  <hr/>
                  <h5 className="card-text mb-5">Estado: {productDetail.estado}</h5>

                  <div className="col-12 col-md-6 mb-4  aling-items-center" style={{width:'200px'}}>
                    <select className="form-select" 
                    aria-label="Default select example">
                      <option selected>Talla</option>
                      <option value="menorToMayor">xs</option>
                      <option value="mayorToMenor">S</option>
                      <option value="NombreAtoZ">M</option>
                      <option value="NombreZtoA">L</option>
                      <option value="categorias">XL</option>
                    </select>
                  </div>

                  <div className="d-flex justify-content-start mb-5">
                    <h2>${productDetail.price}</h2> 
                  </div>
                 
                  <Button variant="primary" onClick = {() => add(productDetail)}>Añadir al carrito</Button>
                </div>
              </div>
            </div>
        </div>
      
       </div>

       <Footer/>
    
    </>
  )
}

export default Detalle