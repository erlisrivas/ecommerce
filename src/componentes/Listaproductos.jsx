import React from 'react'

const Listaproductos = () => {
  return (
      <>
    <div className ="container-fluid">

      <div className="detalles bg-ligth w-200 m-auto">
      
            <div className="d-flex justify-content-between aling-item-center py-2"> 

              <div className ="d-flex aling-item-center">
                <img src="https://cdn.shopify.com/s/files/1/0022/2101/5151/products/image_9ad1568b-9c75-485b-a394-76e4f84c7ef0_600x.jpg?v=1665688053" width="60" alt=""/>
              </div>
              <div className ="d-flex aling-item-center">
              <h5 className="mb-0 text-capitalize p-4">Camisero Spring</h5>
              </div>
              <div className ="d-flex justify-content-end aling-item-center">
              <h5 className="mb-0 text-capitalize p-4">Talla:SM</h5>
                <h5 className="mb-0 p-4 text-success">$19.990</h5>
              </div>

              <div className="clean bg-ligth p-4">x</div>
            </div>
            
       

      </div>
    </div>
    </>
  )
}

export default Listaproductos