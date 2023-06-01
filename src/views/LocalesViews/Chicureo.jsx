import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Context from "../../Context"
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";




const Chicureo = () => {

  const{add, product, setProduct, search} = useContext (Context);
  const Navigate = useNavigate ();


 
  const filtrado = (e) => {
    let ordenarProducts = e.target.value;
    if (ordenarProducts === "menorToMayor") {
      product.sort((a, b) => a.price - b.price);
      setProduct([...product]);
    } else if (ordenarProducts === "mayorToMenor") {
      product.sort((a, b) => b.price - a.price);
      setProduct([...product]);
    }
  };

  const resultado = product.filter(producto => {
    const stockQuantities = Object.values(producto.stock).map(local => local.quantity);
    const sumStock = stockQuantities.reduce((a, b) => a + b, 0);
    return sumStock >= 0;
 });
 console.log(resultado);

  
  return (
    <> 
      <div className="container d-flex justify-content-center mt-4 mx-4">
    <h5 className="fw-bolder" sytyle={{color:"#4d4d4d"}}>Chicureo</h5>
  </div>
  <hr/>

  <div className="col-6 col-md-6 mb-4 mx-2 mt-5 aling-items-center justify-content-center" style={{width:'200px'}}>
        <select className="form-select ms-4" 
        aria-label="Default select example"
        value={search}
        onChange={filtrado}>
          <option selected>Ordenar por</option>
          <option value="menorToMayor">Pecio de menor a mayor</option>
          <option value="mayorToMenor">Precio de mayor a menor</option>
        </select>
      </div>
      

      <div className="row m-4 align-items-center justify-content-center">
        {resultado.map((filterP) => (
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
             <p className="text-capitalize text-secondary">stock: {filterP.stock[1].quantity}</p>
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
         </Col>))}
      </div>
            
    </>
  )
}

  
  

export default Chicureo