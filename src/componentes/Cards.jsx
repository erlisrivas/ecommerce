import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "../index.css";



import { useNavigate } from "react-router-dom";
import React, { useContext } from 'react'
import Context from "../Context"

const Cards = ({filterP}) => {
  const{add} = useContext (Context);
    const Navigate = useNavigate ();




  return (
    
      
        <Col className="col-6 col-md-auto col-lg-auto m-2 justify-content-center aling-items-center" key ={filterP.id}>
        <Card  className="shadow p-3 mb-5 bg-body rounded"
        style={{ width: '15rem'}}
        >
            <Card.Img 
           height={250}
            variant="top" 
            src={filterP.image}
            to={`/detalle/${filterP.id}`}
            onClick = {() => Navigate(`/detalle/${filterP.id}`)}/>
            <Card.Body>
            <p className="text-capitalize text-secondary">sku: {filterP.sku}</p>
            <div className="d-flex justify-content-around" >
            
             <Card.Title> <h5> {filterP.name}</h5></Card.Title>
             </div>
             
                <hr/>
                <h5 className="text-center text-danger pb-3">
                     $ {filterP.price.toLocaleString("es-Cl")}
                </h5>
                <div className ="d-flex justify-content-center mb-4">
                  
                <Button 
                style={{ backgroundColor: '#e54b0e', border:"none"}}
                onClick = {() => add(filterP)}>Añadir al carrito
                
                </Button>
                </div>
            </Card.Body>
         </Card>
         </Col>

        
        
        
 
  )
}

export default Cards