
import React, { useContext } from 'react';
import Context from '../Context';
import { Link } from "react-router-dom";

import NomadLogoBlack from "../assets/img/NomadLogoBlack.png";

const NavBar = () => {

  const{total, searchProduct, setSearchProduct } = useContext (Context);

  const seacherProduct = (e) => {
    setSearchProduct(e.target.value)
    console.log (e.target.value)
  }

  return (
    <>
<header>
 
  <div className="p-3 text-center border-bottom shadow" style={{backgroundColor: "#f1f1f1"}}>
    <div className="container">
      <div className="row">
        <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
          <Link to="/" className="ms-md-2">
             <img src={NomadLogoBlack} height="50" alt=""/>
          </Link>
        </div>
    
        <div className="col-md-4">
          <form className="d-flex input-group w-auto my-auto  mb-md-0">
            <input 
            type="search" 
            className="form-control rounded" 
            placeholder="Buscar" 
            value ={searchProduct}
            onChange= {seacherProduct}/>
            <span 
            className="input-group-text border-1 d-none d-lg-flex bg-black"><i className="fas fa-search"></i></span>
          </form>
        </div>
  
        <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
            <Link to="/Carrito" className="text-reset ms-2">
              <span style={{color: "black"}}><i className="fas fa-shopping-cart"></i></span>
              <span className="badge rounded-pill badge-notification bg-danger">{total}</span>
            </Link>
  
        </div>
      </div>
    </div>
  </div>
</header>
</>
  )
}

export default NavBar