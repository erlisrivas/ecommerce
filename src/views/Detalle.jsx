import React, { useContext, useState, useEffect } from 'react';
import Context from "../Context"
import {useParams} from "react-router-dom";

import Button from 'react-bootstrap/Button';


const Detalle = () => {

  const {id} = useParams();
  const {product, add, local, setSearch, getStock, setGetStock} = useContext (Context);
  const [productDetail, setProductoDetail] = useState ({});
  

  const obtenerDatos = () => { 
    const datosProducto = product.find((product) => product.id === id);
    setProductoDetail(datosProducto);
  };

  const seacher = (e) => {
    setSearch(e.target.value)
    for (let i = 1; i < 7; i++) {
      if(productDetail.stock[i].local.id === e.target.value){
        const stockObtenido = productDetail.stock[i].quantity;
        setGetStock(stockObtenido);
        console.log(e.target.value );
      }
    }
  }

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
              aria-label="Default select example" onChange={seacher}>
              <option  >Local</option>
              {local.map((local, index)=> (
              <option key={index} value={local.id}>{local.name}</option>
                  ))}
              </select>
            </div>
                  
              {getStock > 0 ? <p style={{color:"#999"}}>stock: {getStock} </p> : <p className="text-danger">No hay stock disponible para el local seleccionado</p>}
            <div className="d-flex justify-content-start mb-5">
              <h2>${productDetail.price}</h2> 
            </div>
                 
            <Button style={{ backgroundColor: '#e54b0e', border:"none"}} onClick = {() => getStock > 0 ? add(productDetail):null}>Añadir al carrito</Button>
          </div>
        </div>
      </div>
    </div>
      
       </div>

     
    
    </>
  )
}

export default Detalle