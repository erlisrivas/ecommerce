import React from 'react'
import Context from "../../../Context"
import { useContext } from 'react'

import Cards from "../../../componentes/Cards"

const CardSection = () => {
    const{product, setProduct, search} = useContext (Context);

  const resultado = !search ? product : product.filter((elem) => elem.name
  .toLowerCase()
   .normalize("NFD")
   .replace(/[\u0300-\u036f]/g, "")
   
   ); 
 
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
  
  return (
    <>
    
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
        {resultado.map((filterP, index) => (
        <Cards key={index}
        filterP={filterP}/>))}
      </div>
            
    </>
  )
}

export default CardSection