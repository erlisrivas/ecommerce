
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import "../index.css";

import { useNavigate } from "react-router-dom";



export const ProductoFilter = ({producto}) => {
    
    const Navigate = useNavigate ();

  return (

    <div className="row m-4 align-items-center justify-content-center">
        {producto.map((product) => (
        <Col className="col-12 col-md-4 col-lg-3 m-4"key ={product.id}>
        <Card  className="hoverCard"style={{ width: '15rem'}}>
            <Card.Img 
            height="455"
            variant="top" 
            src={product.img}
            to={`detalle/${product.id}`}
                onClick = {() => Navigate(`detalle/${product.id}`)} />
            <Card.Body>
            <div className="d-flex justify-content-around">
             <Card.Title> <h5 className="nombreP"> {product.name}</h5></Card.Title>
             </div>
                <hr/>
                <h5 className="text-center text-danger pb-3">
                     $ {product.price.toLocaleString("es-Cl")}
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
