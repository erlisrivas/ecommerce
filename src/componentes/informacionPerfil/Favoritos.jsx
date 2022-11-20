import React from 'react'
import Context from '../../Context'
import { useContext } from 'react'
import { useNavigate } from "react-router-dom";




const Favoritos = () =>{

  const{tienda, setTienda} = useContext (Context);
  const Navigate = useNavigate ();
  
  const deleteFavorito = (id)=>{
    const tiendaIndex = tienda.findIndex((elem) => elem.id === id);
    tienda[tiendaIndex].liked = !tienda[tiendaIndex].liked;
    setTienda([...tienda]);
  };

  return (
    <>

        <div className="text-capitalize mb-4 mx-5">
          <h4 >Mis Favoritos</h4>
        </div>

        <div className="row justify-content-center">
        {tienda.filter((elem)=>elem.liked).map((elem) =>(
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
            <button onClick = {() => deleteFavorito (elem.id)}>eliminar</button>
            </div>
            </div>
            </div>
      
      ))}

      
      </div>
      </>
    
    
  )
}

export default Favoritos