import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "../index.css";



import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import Context from "../Context"

const Cards = ({filterP}) => {
  const{tienda, setTienda, add} = useContext (Context);
    const Navigate = useNavigate ();

    const setFavorito = (id)=>{
      const tiendaIndex = tienda.findIndex((f) => f.id === id);
      tienda[tiendaIndex].liked = !tienda[tiendaIndex].liked;
      setTienda([...tienda]);
    };
  


  return (
    
      
        <Col className="col-12 col-md-4 col-lg-3 m-4" key ={filterP.id}>
        <Card  className="hoverCard "
        style={{ width: '15rem'}}
        >
            <Card.Img 
            height="455"
            variant="top" 
            src={filterP.img}
            to={`/detalle/${filterP.id}`}
            onClick = {() => Navigate(`/detalle/${filterP.id}`)}/>
            <Card.Body>
            <div className="d-flex justify-content-around" >
             <Card.Title> <h5 className="nombreP"> {filterP.name}</h5></Card.Title>
             <svg
              className="heart"
              onClick={() => setFavorito(filterP.id)}
              width="35px"
              viewBox="0 0 25 30">
              <path
                fill={filterP.liked ? "red" : "black"}
                d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
              />
            </svg>
             </div>
             <p className="nombreCat text-capitalize">{filterP.categoria}</p>
                <hr/>
                <h5 className="text-center text-danger pb-3">
                     $ {filterP.price.toLocaleString("es-Cl")}
                </h5>
                <div className ="d-flex justify-content-center mb-4">
                  
                <Button 
                variant="primary"
                onClick = {() => add(filterP)}>Añadir al carrito
                
                </Button>
                </div>
            </Card.Body>
         </Card>
         </Col>

        
        
        
 
  )
}

export default Cards