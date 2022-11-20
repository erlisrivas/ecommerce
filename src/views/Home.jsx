import React from 'react'
import { Link } from "react-router-dom";
import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'
import Cards from "../componentes/Cards"
import "../index.css"

import Context from "../Context"
import { useContext } from 'react'

const Home = () => {

  const{tienda, setTienda, buscador} = useContext (Context);

  const resultado = !buscador? tienda : tienda.filter((elem) => elem.name
   .toLowerCase()
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   .includes(buscador.toLocaleLowerCase()));

  const filtrado = (e) => {
    let ordenarProducts = e.target.value;
    if (ordenarProducts === "menorToMayor") {
      tienda.sort((a, b) => a.price - b.price);
      setTienda([...tienda]);
    } else if (ordenarProducts === "mayorToMenor") {
      tienda.sort((a, b) => b.price - a.price);
      setTienda([...tienda]);
    }

    if (ordenarProducts === "NombreAtoZ") {
      tienda.sort((a, b) => a.name.localeCompare(b.name));
      setTienda([...tienda]);
    } else if (ordenarProducts === "NombreZtoA") {
      tienda.sort((a, b) => b.name.localeCompare(a.name));
      setTienda([...tienda]);
    }

    if (ordenarProducts === "categorias") {
      tienda.sort((a, b) => a.categoria.localeCompare(b.categoria));
      setTienda([...tienda]);
    }

  };

  return (
    <>
      <NavBar/>
      <Header/>

      <div className="container-fluid d-flex justify-content-center m-0 p-4">
        <div className="row">
        
        <div className="cardInfo col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 ">
          <i className="fas fa-tags" width ="100" style ={{color: '#800080'}}></i>
          <Link to="/CrearPub" className="text-ligth"style ={{textDecoration: 'none'}}><h6 className="mt-2" >Vender Producto</h6></Link>
          <p className="mt-2">Ingresa un nuevo producto a tu catálogo</p>
        </div>
        
        
        <div className="cardInfo col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 ">
          <i className="fas fa-shopping-bag" style ={{color: '#800080'}}></i>
          <h6 className="mt-2">Mis Compras</h6>
          <p className="mt-2">Haz seguimiento de tus compras</p>
        </div>
        
        <div className="cardInfo col-md-2 col-lg-2 col-xl-3 mx-auto mt-3">
          <i className="fas fa-file-alt" style ={{color: '#800080'}}></i>
          <h6 className="mt-2">Contactanos</h6>
          <p className="mt-2">Te ayudamos con tus dudas y solicitudes</p>
        </div>
        
        <div className="cardInfo col-md-2 col-lg-2 col-xl-3 mx-auto mt-3 ">
          <i className="fas fa-laptop-house" style ={{color: '#800080'}}></i>
          <h6 className="mt-2">Tiendas y horarios</h6>
          <p className="mt-2">Revisa donde estan nuestras tiendas</p>
        </div>
        
        </div>
      </div>

      <div className="col-12 col-md-6 mb-4 mx-5 aling-items-center" style={{width:'400px'}}>
                    <select className="form-select" 
                    aria-label="Default select example"
                    value={buscador}
                    onChange={filtrado}>
                      <option selected>Ordenar por</option>
                      <option value="menorToMayor">Pecio de menor a mayor</option>
                      <option value="mayorToMenor">Precio de mayor a menor</option>
                      <option value="NombreAtoZ">Nombre A - Z</option>
                      <option value="NombreZtoA">Nombre Z - A</option>
                      <option value="categorias">categorias</option>
                    </select>
                  </div>

                <div className="grilla-plantas">
                {resultado.map((el) => (
                <Cards key={el.id}/>
                  ))}
            </div>
      <Footer/>
      </>
      
  )
}

export default Home