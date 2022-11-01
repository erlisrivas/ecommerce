import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom"
import Context from '../Context'
import Button from 'react-bootstrap/Button';


const Detalle = () => {
  const [producto, setProducto] = useState ({});
  const {tienda} = useContext(Context);
  const {id} = useParams();

  const obtenerDatos = () => { 
    const datosProducto = tienda.find((tienda) => tienda.id === id);
    setProducto (datosProducto);
  };

  useEffect(() => {
    obtenerDatos();
  }, [tienda]);


  return (
    <>
    <div className ="container mt-5">
      <div className ="card-mb-3 estilos">
        <div className ="row g-0">
        <div className ="col-md-6">
          <img 
          src ={producto.img}
          className= "img-fluid estilos rounded-start"
          alt = "img1"
          />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title text-capitalize">{producto.name}</h5>
            <hr/>
             <p className="card-text">Estado: {producto.estado}</p>
             
           
           <div className="d-flex justify-content-around">
                    <h4>{producto.price}</h4> 
            </div>
            <Button 
                variant="danger"
                >Añadir al carrito</Button>
          </div>
        </div>
        </div>
        
      </div>
      
    </div>
    
    </>
  )
}

export default Detalle