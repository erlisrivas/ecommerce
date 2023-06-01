import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';

import { useNavigate } from "react-router-dom";
import React, {useContext} from 'react'
import Context from '../Context'



const Carrito = () => {
  const {addToCar, increase, decrease, total} = useContext (Context);
  const Navigate = useNavigate ();

  const totalToBuy = addToCar.reduce((a, {count, price}) => a + price*count, 0);
  

  return (
    <>

    <div className="container d-flex justify-content-center mt-4 mx-4">
      <h5 className="fw-bolder" sytyle={{color:"#4d4d4d"}}>Detalles del pedido</h5>
    </div>
    <hr/>
    <div className="ms-5">
      <h6>
        Tu carro tiene: <sanp className="text-secondary">{total} productos</sanp>
      </h6>
    </div>

    <div className="row m-4 justify-content-center">
    <div className ="col-md-8 carrito p-2">
      <div className="detalles bg-ligth w-75 m-2 p-3 justify-content-center aling-items-center">
        <div className="table-responsive">
          <Table>
            <thead className ="TableHead">
            <tr>
              <th></th>
              <th><h5>Nombre del producto</h5></th>
              <th><h5>Precio</h5></th>
              <th><h5>Cantidad</h5></th>
              <th><h5>SubTotal</h5></th>
            </tr>
            </thead>
            <tbody className='tableBody'>
            {addToCar.map((producto, i) => (
            <tr key={i}>
              <td><img src={producto.image} width="50" alt=""/></td>
              <td>{producto.name}</td>
              <td>${(producto.price).toLocaleString("es-Cl")}</td>
              <td><Button className="text-dark text-center" style={{ backgroundColor: '#f1f1f1', borderColor:"gray", width:"1.5rem"}} onClick={() => decrease(i)}>-</Button>
                <b className ="mx-2">{producto.count}</b>
                <Button className="text-dark text-center" style={{ backgroundColor: '#f1f1f1', borderColor:"gray", width:"1.5rem"}} onClick={() => increase(i)}>+</Button></td>
              <td>${(producto.price*producto.count).toLocaleString("es-Cl")}</td>
            </tr>
        ))}
          </tbody>
        </Table>
      </div>

      <div className = "d-flex justify-content-end ">
        <h3 className="my-4">Total: ${totalToBuy.toLocaleString("es-Cl")}</h3>
      </div>
      <div className="d-flex justify-content-between mt-2">
        <Button style={{ backgroundColor: '#e54b0e', border:"none"}} onClick = {() => Navigate("/")}>Seguir Comprando</Button>
        
      </div>

    </div>
  </div>
  <div className="col-6 col-md-4 p-2 justify-content-center aling-items-center mt-5">
    <h5>Resumen de Compra</h5>
    <hr/>
    <p>Costo de tus productos: <span>${totalToBuy.toLocaleString("es-Cl")}</span></p> 
    <hr/>
    <p className="fw-bolder">Cupon de descuento:</p>
    <hr/>
    <h5 className="fw-bolder">Tolal a pagar:<span>${totalToBuy.toLocaleString("es-Cl")}</span></h5>
   
    <Button className="mt-5"style={{ backgroundColor: '#e54b0e', border:"none", width: '20rem'}} >Finalizar Compra</Button>
  </div>
  </div>
 
    </>
  )
}

export default Carrito