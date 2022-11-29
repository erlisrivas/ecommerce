import React from 'react'
import "../index.css"

import { Link } from "react-router-dom";
import Context from "../Context"
import { useContext } from 'react'

import NavBar from "../componentes/NavBar"
import Footer from '../componentes/Footer'
import Header from '../componentes/Header'
import Cards from "../componentes/Cards"

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
          <div className="cardInfo col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 p-2">
            <div className="logoInfo d-flex justify-content-center mb-4">
              <i className="fas fa-tags fa-lg" style ={{color: '#800080'}}></i>
            </div>
            <div className="infocard d-flex flex-column justify-content-center align-content-center">
            <Link to="/CrearPub" className="text-dark" style ={{textDecoration: 'none'}}><h6 className="mt-2" >Vender Producto</h6></Link>
            <p className="">Ingresa un nuevo producto a tu catálogo</p>
            </div>
          </div>
        
          <div className="cardInfo col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 p-2">
            <div className="logoInfo d-flex justify-content-center mb-4">
            <i className="fas fa-shopping-bag fa-lg fa-align-center" style ={{color: '#800080'}}></i>
            </div>
            <div className="infocard d-flex flex-column justify-content-center align-content-center">
            <h6 className="mt-2">Mis Compras</h6>
            <p className="">Haz seguimiento de tus compras</p>
            </div>
          </div>
        
          <div className="cardInfo col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 p-2">
            <div className="logoInfo d-flex justify-content-center mb-4">
              <i className="fas fa-file-alt fa-lg fa-align-center" style ={{color: '#800080'}}></i>
            </div>
            <div className="infocard d-flex flex-column justify-content-center align-content-center">
            <h6 className="mt-2">Contactanos</h6>
            <p className="">Te ayudamos con tus dudas y solicitudes</p>
            </div>
          </div>
        
          <div className="cardInfo col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 p-2">
            <div className="logoInfo d-flex justify-content-center mb-4">
              <i className="fas fa-laptop-house fa-lg fa-align-center" style ={{color: '#800080'}}></i>
            </div>
            <div className="infocard d-flex flex-column justify-content-center align-content-center">
            <h6 className="mt-2">Nuestras tiendas</h6>
            <p className="">Revisa donde estan nuestras tiendas</p>
            </div>
          </div>
        </div>
      </div>

      <div className="col-12 col-md-6 mb-4 mx-5 aling-items-center" style={{width:'200px'}}>
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

      <div className="row m-4 align-items-center justify-content-center">
        {resultado.map((filterP, index) => (
        <Cards key={index}
        filterP={filterP}/>))}
      </div>
            
    <Footer/>
      </>
      
  )
}

export default Home