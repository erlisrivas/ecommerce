import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useContext } from 'react'
import Context from '../Contenxt'
import { Link } from "react-router-dom";

import logoN from "../assets/img/logoN.png"
import img5 from "../assets/img/img5.jpg"

const NavBar = () => {

  const{buscador, setBuscador} = useContext (Context);

  const seacher = (e) => {
    setBuscador(e.target.value)
    console.log (e.target.value)
  }


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
            <input autoComplete="off" 
            type="search" 
            className="form-control rounded" 
            placeholder="Search" 
            value={buscador}
            onChange= {seacher}/>
            <span 
            className="input-group-text border-0 d-none d-lg-flex"><i className="fas fa-search"></i></span>
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

  <Navbar className="shadow p-3 mb-2 bg-white rounded" collapseOnSelect expand="lg" bg="ligth" variant="light">
    <Container className="justify-content-center justify-content-md-between">
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Link to="/Vestidos" className="nav-link" >Vestido</Link>
          <Link to="/Enteritos" className="nav-link" >Enteritos</Link>
          <Link to="/Jardineras" className="nav-link" >Jardineras</Link>
          <Link to="/Pantalon" className="nav-link" >Pantalones</Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>

</header>
</>
  )
}

export default NavBar