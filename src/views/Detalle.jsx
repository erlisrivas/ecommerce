import {useState, useEffect, useContext} from "react";
import {useParams} from "react-router-dom"
import Context from '../Context'
import Button from 'react-bootstrap/Button';


const Detalle = () => {
  const [productDetail, setProductoDetail] = useState ({});
  const {tienda, add} = useContext(Context);
  const {id} = useParams();

  const obtenerDatos = () => { 
    const datosProducto = tienda.find((tienda) => tienda.id === id);
    setProductoDetail (datosProducto);
   
  };

  useEffect(() => {
    obtenerDatos();
  }, [tienda]);

  console.log(productDetail)

  return (
    <>
    <div className ="container mt-5">
            <div className ="card-mb-3 estilos">
              <div className ="row g-0">
                <div className ="col-md-6 mb-4">
                  <img 
                  src ={productDetail.img}
                  className= "img-fluid estilos rounded-start"
                  alt = "img1"
                  width={380}
                  />
                </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h3 className="card-title text-capitalize">camisa larga</h3>  
                  <hr/>
                  <p className="card-text">Estado: {productDetail.estado}</p>

                  <div className="d-flex justify-content-start">
                    <h4>{productDetail.price}</h4> 
                  </div>
                  <div className="col-12 col-md-6 mb-4">
                      <select className="form-select" 
                      aria-label="Default select example"
                      >
                        {productDetail.talla?.map((talla, i) =>(
                      <option key={i}>{talla}</option>
                 ))}
                    </select>
                  </div>
                  <div className="col-lg-2">
                    <div className="input-groupd d-flex">
                        <span className="input-group-btn">
                          <button className="quantity-left-minus btn btn-white btn-number"  >
                            -
                          </button>
                        </span>
                        <input type="text" id="quantity" name="quantity" className="form-control input-number" value ="1" min="1" max="100"/>
                        <span className="input-group-btn">
                           <button className="quantity-right-plus btn btn-white btn-number">
                             +
                          </button>
                        </span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-end mt-8">
                    <h4>Total: $5000</h4> 
                  </div>

                  <Button variant="primary" onClick = {() => add(productDetail)}>Añadir al carrito</Button>
                </div>
              </div>
            </div>
        </div>
      
       </div>
    
    </>
  )
}

export default Detalle