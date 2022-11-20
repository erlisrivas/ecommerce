import React from 'react'

import Context from '../../Context'
import { useContext } from 'react'


const Favoritos = () => {
  const{tienda, setTienda} = useContext (Context);
 

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

        <div className="">
        {tienda.filter((elem)=>elem.liked).map((elem) =>(
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
            onClick = {() => deleteFavorito (elem.id)}>
            <button>-</button>
            </div>
      </div>
      ))}

      </div>
      </>
    
    
  )
}

export default Favoritos