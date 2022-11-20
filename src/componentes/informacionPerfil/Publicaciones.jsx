
import {useState} from 'react';
import React, { useContext } from 'react'
import Context from "../../Context"

const Publicaciones = () => {
  const{tienda} = useContext (Context);

 

  return (
   <>
 <div>
        {tienda.map((elem) =>(
        <div className="infoFav d-flex justify-content-between aling-content-center mb-2" key={elem.id}>
        
            <div className="imgFav mx-5">
            <img src={elem.img} width="50" alt={elem.name}/>
            </div>

            <div className="nameFav mx-3 mt-4" width="100px">
            <h5>{elem.name}</h5>
            </div>

            <div className="priceFav mx-3 mt-4" width="50px">
            <h5>${(elem.price).toLocaleString("es-Cl")}</h5>
            </div>

            <div className="deleteFav mx-3 mt-4"
            >
            <button>-</button>
            </div>
      </div>
      ))}

      </div>
   </>
        
           
  )
}

export default Publicaciones