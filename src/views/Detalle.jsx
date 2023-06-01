import React, { useContext, useState, useEffect } from 'react';
import Context from "../Context"
import {useParams} from "react-router-dom";

import Button from 'react-bootstrap/Button';


const Detalle = () => {

  const {id} = useParams();
  const {product, add, local} = useContext (Context);
  const [productDetail, setProductoDetail] = useState ({});

  const obtenerDatos = () => { 
    const datosProducto = product.find((product) => product.id === id);
    setProductoDetail(datosProducto);
  };

  useEffect(() => {
    obtenerDatos();
  }, []);
  

  return (
    <>
    <div className ="container mt-5">
            <div className ="card-m-3 p-3 border border-black">
              <div className ="row g-0">
                <div className ="col-md-6 mb-4">
                  <img 
                  src ={productDetail.image}
                  className= "img-fluid estilos rounded-start"
                  alt = "img1"
                  width={300}
                  />
                </div>
              <div className="col-md-4">
                <div className="card-body">
                  <p style={{color:"#999"}}>SKU: {productDetail.sku}</p>
                  <h3 className="card-title text-capitalize">{productDetail.name}</h3>  
                  <hr/>
                  <div className="col-12 col-md-6 mb-4  aling-items-center" style={{width:'100px'}}>
                    <select className="form-select" 
                    aria-label="Default select example">
                      <option  >Local</option>
                      {local.map((local, index)=> (
                      <option key={index} value={index}>{local.name}</option>
                      ))}
                    </select>
                  </div>
                  <p style={{color:"#999"}}>stock: </p>
                  <div className="d-flex justify-content-start mb-5">
                    <h2>${productDetail.price}</h2> 
                  </div>
                 
                  <Button style={{ backgroundColor: '#e54b0e', border:"none"}} onClick = {() => add(productDetail)}>Añadir al carrito</Button>
                </div>
              </div>
            </div>
        </div>
      
       </div>

     
    
    </>
  )
}

export default Detalle