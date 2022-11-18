import React from 'react'
import Button from 'react-bootstrap/Button';

const Listaproductos = () => {
  return (
      <>
          <div className ="container mt-5">
            <div className ="card-mb-3 estilos">
              <div className ="row g-0">
                <div className ="col-md-6 mb-4">
                  <img 
                  src ="https://cdn.shopify.com/s/files/1/0022/2101/5151/products/image_8d6da7ac-18fd-44ef-bc92-92ab50067234_600x.jpg?v=1648684511"
                  className= "img-fluid estilos rounded-start"
                  alt = "img1"
                  width={380}
                  />
                </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h3 className="card-title text-capitalize">camisa larga</h3>  
                  <hr/>
                  <p className="card-text">Estado: usado</p>

                  <div className="d-flex justify-content-start">
                    <h4>$5000</h4> 
                  </div>
                  <div className="col-12 col-md-6 mb-4">
                      <select className="form-select" 
                      aria-label="Default select example"
                      >
                      <option selected>Tamaño:</option>
                      <option value="1">S</option>
                      <option value="2">M</option>
                      <option value="3">L</option>
                      <option value="3">XL</option>
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

                  <Button variant="primary">Añadir al carrito</Button>
                </div>
              </div>
            </div>
        </div>
      
       </div>
    </>
  )
}

export default Listaproductos