import React from 'react'
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import img5 from "../assets/img/img5.jpg"
import { Link } from "react-router-dom";
import logoN from "../assets/img/logoN.png"


const NavBar = () => {
  return (
    <>
<header>
 
  <div className="p-3 text-center bg-white border-bottom" style={{backgroundImage: `url(${img5})`}}>
    <div className="container">
      <div className="row">
    
        <div className="col-md-4 d-flex justify-content-center justify-content-md-start mb-3 mb-md-0">
        <Link to="/Home" className="ms-md-2">
            <img src={logoN} height="35" alt=""/>
        </Link>
        </div>
    
        <div className="col-md-4">
          <form className="d-flex input-group w-auto my-auto mb-3 mb-md-0">
            <input autoComplete="off" type="search" className="form-control rounded" placeholder="Search" />
            <span className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search"></i></span>
          </form>
        </div>
  
        <div className="col-md-4 d-flex justify-content-center justify-content-md-end align-items-center">
          <div className="d-flex">
        
            <Link to="/Carrito" className="text-reset me-3">
              <i className="fas fa-shopping-cart"></i>
              <span className="badge rounded-pill badge-notification bg-danger">0</span>
            </Link>
            
            <Dropdown as={ButtonGroup}>
                    
              <Dropdown.Toggle split variant="ligth" id="dropdown-custom-2"><img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height="22"
                  alt="" loading="lazy" />  </Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item ><Link className="text-dark"to="/MiPerfil">Mi perfil</Link></Dropdown.Item>
              <Dropdown.Item ><Link className="text-dark"to="/">Cerrar sesión</Link></Dropdown.Item>
              </Dropdown.Menu>
              </Dropdown>


          </div>
        </div>
       
      </div>
    </div>
  </div>

  <nav className="navbar navbar-expand-lg navbar-light bg-white shadow p-3 mb-2 bg-white rounded">

      <div className="container-fluid justify-content-center justify-content-md-between">

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#opciones"> 
          <i className="fas fa-bars text-dark"></i> Categorías
        </button>

        <div className="collapse navbar-collapse" id="opciones">
         <ul className="navbar-nav me-auto d-flex flex-row mt-3 mt-lg-0">
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
              <Link to="/Vestidos" className="nav-link" href="#">Vestidos</Link>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <Link to="/Jardineras" className="nav-link">Jardineras</Link>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <Link to="/Enteritos" className="nav-link">Enteritos</Link>
            </li>
            <li className="nav-item me-2 me-lg-0 d-none d-md-inline-block">
            <Link to="/Pantalon" className="nav-link" >Pantalon</Link>
            </li>
          </ul>
        </div>
      </div>
  </nav>

</header>
</>
  )
}

export default NavBar