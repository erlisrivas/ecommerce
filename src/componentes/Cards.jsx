import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "../index.css";
import Heart from "../componentes/Heart"

import Context from '../Context'
import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react'

const Cards = () => {
  const{tienda, setTienda} = useContext (Context);
    const Navigate = useNavigate ();

    const setFavorito = (id)=>{
      const tiendaIndex = tienda.findIndex((f) => f.id === id);
      tienda[tiendaIndex].favorito = !tienda[tiendaIndex].favorito;
      setTienda([...tienda]);
    };

  return (
    <div className="row m-4 align-items-center justify-content-center">
        {tienda.map((tienda) => (
        <Col className="col-12 col-md-4 col-lg-3 m-4"key ={tienda.id}>
        <Card  className="hoverCard"style={{ width: '18rem'}}>
            <Card.Img 
            variant="top" 
            src={tienda.img}
            to={`detalle/${tienda.id}`}
                onClick = {() => Navigate(`detalle/${tienda.id}`)} />
            <Card.Body>
            <div className="d-flex justify-content-around" onClick = {() => setFavorito (tienda.id)}>
             <Card.Title> <h5 className="nombreP"> {tienda.name}</h5></Card.Title>
             <Heart filled={tienda.favorito} />
             </div>
                <hr/>
                <h5 className="text-center text-danger pb-3">
                     $ {tienda.price.toLocaleString("es-Cl")}
                </h5>
                <div className ="d-flex justify-content-center mb-4">
                <Button 
                variant="primary"
                >Añadir al carrito
                
                </Button>
                </div>
            </Card.Body>
         </Card>
         </Col>

        
        
        )       
        )}
  </div>
  )
}

export default Cards