
import "../assets/css/registro.css"
import img5 from "../assets/img/img5.jpg"
import Context from "../Context"
import { nanoid } from 'nanoid';
import React, { useState, useContext} from 'react';


const CrearPub = () => {
  const{tienda} = useContext (Context);

  //capturando información del formulario
  const [foto, setFoto]= useState("");
  const [categoria, setCategoria] = useState("");
  const [estado, setEstado] = useState("");
  const [nameProduct, setNameProduct] = useState("");
  const [precio, setPrecio] = useState("");
  
  const [error2, setError2] = useState (false);
  const [newPub, setNewPub] = useState(tienda);

  const agregarNewPub = (e) => {
    e.preventDefault();
    if (!foto.trim() || !categoria.trim() || !estado.trim() || !nameProduct.trim() || !precio.trim() ){
      setError2 (true);
    }
    else {
      setNewPub([...newPub, { id: nanoid(), 
                              img: foto, 
                              categoria: categoria, 
                              estado: estado, 
                              name: nameProduct, 
                              liked: false,
                              price: precio}])
   
    }
  };

  console.log(newPub);
  return (
    <section className="intro">
  <div className="bg-image-vertical h-100" style={{backgroundImage: `url(${img5})`}}
        >
    <div className="mask d-flex align-items-center h-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10">
            <div className="card" style={{bordeRadius: '1rem'}}>
              <div className="card-body p-5">

                <h1 className="mb-5 text-center">Ingresar datos del producto</h1>
                {error2?<p className="small text-danger p-0">Debes ingresar todos los datos</p>: null}

                <form onSubmit={agregarNewPub}>

                <div className="form-outline mb-4">
                <input type="file" id="form6Example1" 
                className="form-control" 
                value={foto}
                onChange = {(e) => setFoto(e.target.value)}/>
                    <label className="form-label" >Agregar Fotos</label>
                  </div>
                 
                  <div className="row">
                    <div className="col-12 col-md-6 mb-4">
                    <select className="form-select" 
                    aria-label="Default select example"
                    value={categoria}
                    onChange = {(e) => setCategoria(e.target.value)}
                    >
                      <option selected>Categoría</option>
                      <option value="vestidos">Vestidos</option>
                      <option value="enteritos">Enteritos</option>
                      <option value="pantalon">Pantalon</option>
                      <option value="jardineras">Jardineras</option>
                    </select>
                    </div>

                    <div className="col-12 col-md-6 mb-4">
                    <select className="form-select" 
                    aria-label="Default select example"
                    value={estado}
                    onChange = {(e) => setEstado(e.target.value)}
                    >
                      <option selected>Estado</option>
                      <option value="nuevo">Nuevo</option>
                      <option value="usado">Usado</option>
                    </select>
                  </div>
                  </div>

                  
                  <div className="form-outline mb-4">
                    <input type="text"
                    className="form-control"
                    value={nameProduct}
                    onChange = {(e) => setNameProduct(e.target.value)}/>
                    <label className="form-label" >Nombre del producto</label>
                  </div>

                 
                  <div className="form-outline mb-4">
                    <input type="number" 
                    className="form-control" 
                    value={precio}
                    onChange = {(e) => setPrecio(e.target.value)}/>
                    <label className="form-label" >Precio del producto</label>
                  </div>

                  <div className="form-outline mb-4">
                  
                  <h6>Selecciona la talla disponible:</h6>

                  <div className="form-check form-check-inline">
                    <input className="form-check-input" 
                    type="checkbox" 
                    
                    id="flexCheckIndeterminate"
                   
                    />
                    <label className="form-check-label" for="flexCheckIndeterminate">
                    XS
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    <label className="form-check-label" for="flexCheckIndeterminate">
                    S
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    <label className="form-check-label" for="flexCheckIndeterminate">
                    M
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate"/>
                    <label className="form-check-label" for="flexCheckIndeterminate">
                    XL
                    </label>
                  </div>
                  
                  </div>

              
                  <button type="submit" className="btn btn-secondary btn-rounded btn-block">Crear Publicación</button>
                </form>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default CrearPub