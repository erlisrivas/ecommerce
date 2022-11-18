
import React, {useContext} from 'react'
import Context from '../Context'
import Button from 'react-bootstrap/Button';
import Footer from '../componentes/Footer'
import NavBar from "../componentes/NavBar"
import Table from 'react-bootstrap/Table';
import { useNavigate } from "react-router-dom";


const Carrito = () => {
  const {agregarCar, incrementar, decrement} = useContext (Context);
  const total = agregarCar.reduce((a, {count, price}) => a + price*count, 0);
  const Navigate = useNavigate ();

  return (
    <>
  <NavBar/>
  <div className="container d-flex justify-content-center mt-3 mx-4">
        <h5 className="titleCat">Detalles del pedido</h5>
      </div>
      <hr/>
    <div className ="carrito p-5">
      <div className="detalles bg-ligth w-75 m-auto p-5">
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
        {agregarCar.map((producto, i) => (
        <tr key={i}>
          <td><img src={producto.img} width="50" alt=""/></td>
          <td>{producto.name}</td>
          <td>{(producto.price).toLocaleString("es-Cl")}</td>
          <td><Button variant="danger" onClick={() => decrement(i)}>-</Button>
              <b className ="mx-2">{producto.count}</b>
              <Button variant="primary" onClick={() => incrementar(i)}>+</Button></td>
          <td>${(producto.price*producto.count).toLocaleString("es-Cl")}</td>
        </tr>
        
        ))}
        </tbody>
        </Table>
        </div>
          <div className = "d-flex justify-content-end ">
          <h3 className="my-4">Total: ${total.toLocaleString("es-Cl")}</h3>
          </div>
          <div className="d-flex justify-content-between mt-2">
          <Button variant="success" onClick = {() => Navigate("/Home")}>Seguir Comprando</Button>
          <Button variant="success">Finalizar Compra</Button>
          </div>
        

      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Carrito