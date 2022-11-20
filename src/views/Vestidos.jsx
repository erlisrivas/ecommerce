
import "../index.css"
import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import { ProductoFilter } from "../componentes/ProductoFilter"
import React, {useState, useContext } from 'react'
import Context from '../Context'


const Vestidos = () => {
  const{tienda} = useContext (Context);
  const [producto, setProducto] = useState(tienda);
  
  
  const allCategories = [
		...new Set(tienda.map(art => art.categoria)),];
    console.log(allCategories)
  
    const filterCategory = (categoria) => {
      if (categoria === 'vestidos'){
        setProducto(tienda)
        return
      }
  
      const filteredData = tienda.filter((e) => e.categoria === categoria);
      setProducto(filteredData)
    }

  return (
    <>
      <NavBar/>

      <div className="container d-flex justify-content-center mt-3 mx-4">
        <h5 className="titleCat">Vestidos</h5>
      </div>
      <hr/>

      <div className="galeria grid-columns-4 p-3">

          <ProductoFilter producto={producto}/>
      </div>




      <Footer/>
    </>
  )
}

export default Vestidos