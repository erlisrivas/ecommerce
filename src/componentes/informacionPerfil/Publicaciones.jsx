
import React, { useContext } from 'react'
import Context from "../../Context"
import { useNavigate } from "react-router-dom";

const Publicaciones = () => {
  const{tienda,setTienda} = useContext (Context);
  const Navigate = useNavigate ();


  const borrar = (id) => {
    const eliminar = tienda.findIndex((elem) => elem.id === id);
    tienda.splice(eliminar, 1)
    setTienda([...tienda]);
    }

  return (
   <>
 
    <div className="text-capitalize mb-4 mx-5">
          <h4 >Mis Publicaciones</h4>
    </div>
    <div className="row justify-content-center">
        {tienda.map((elem) =>(
        <div className="col-12 col-md-6 col-lg-4 m-2" key={elem.id}>
        
        <div className="infoFav d-flex justify-content-center aling-content-center  p-2 border border-black" >
        
            <div className="imgFav mx-2">
            <img src={elem.img} width="50" alt={elem.name}/>
            </div>

            <div className="d-flex flex-column">
            <div className="nameFav mx-3 mt-2" >
            <h6>{elem.name}</h6>
            </div>
            <div className="priceFav mx-3 mt-2" >
            <h6 className="text-danger">${(elem.price).toLocaleString("es-Cl")}</h6>
            </div>
            </div>

            <div className="deleteFav mx-3 mt-4">
           <button className="button mb-2 mx-"
           to={`/detalle/${elem.id}`}
            onClick = {() => Navigate(`/detalle/${elem.id}`)}>Ver más</button>
            <button onClick = {() => borrar (elem.id)}>eliminar</button>
            </div>
            </div>
            </div>
      ))}
    </div>
      
   </>
        
           
  )
}

export default Publicaciones