import "../index.css"


import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from "react-router-dom";


export default function NavBar() {
  return (

<Navbar bg="light" expand="lg">
      <Container fluid>
        <Navbar.Brand>
        <Link to="/Home" >
        <img
              src=""
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt=""
            />
        </Link>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            
            <NavDropdown title="Menu de categorías" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">
              <Link to="/Vestuario" >Vestuario</Link>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              <Link to="/Tecnologia" >Tecnología</Link>
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
         <div className="d-flex justify-content-center" style={{ width: '70%' }}>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              style={{ width: '450px'}}
              aria-label="Buscar"
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          </div>
         
        
          <Nav>
          <Link to="/Carrito" >🛒 Carrito</Link>
          <Link to="/MiPerfil" > Perfil</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  )
}

