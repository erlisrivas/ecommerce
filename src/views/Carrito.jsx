import React from 'react'
import Button from 'react-bootstrap/Button';
import Footer from '../componentes/Footer'
import NavBar from "../componentes/NavBar"

const Carrito = () => {
  return (
    <>
  <NavBar/>
    <div className ="carrito p-5">
      <div className="detalles bg-ligth w-75 m-auto p-5">
        <h5>Detalles del pedido: </h5>
        <div className="p3 bg-white">
          
            <div className="d-flex justify-content-between py-2"> 

              <div className ="d-flex justify-content-between aling-item-center">
                <img src="https://cdn.shopify.com/s/files/1/0022/2101/5151/products/image_9ad1568b-9c75-485b-a394-76e4f84c7ef0_600x.jpg?v=1665688053" width="50" alt=""/>
                <h6 className="mb-0 text-capitalize p-2">Camisero Spring</h6>
              </div>
              <div className ="d-flex justify-content-end aling-item-center">
                <h6 className="mb-0 p-2 text-success">$19.990</h6>
                <Button variant="danger" style={{height:"35px"}}>-</Button>
              <b className ="mx-2">4</b>
              <Button variant="primary" style={{height:"35px"}}>+</Button>
              </div>
              
            </div>
          
          <h3 className="my-4">Total: $19.990</h3>
          <Button variant="success">Ir a pagar</Button>
        </div>

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Carrito