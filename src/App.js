
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from "./Context"



import Home from "./views/Home";
import Carrito from "./views/Carrito";
import InicioSecion from "./views/InicioSecion";
import Registro from "./views/Registro";
import CrearPub from "./views/CrearPub";
import MiPerfil from "./views/MiPerfil";
import Detalle from "./views/Detalle";
import Enteritos from "./views/Enteritos";
import Vestidos from "./views/Vestidos";
import Jardineras from "./views/Jardineras";
import Pantalon from "./views/Pantalon";




function App() {
  const [tienda, setTienda] = useState([]);

  const getTienda = async () => {
    const res = await fetch ('./tienda.json')
    const data = await res.json()
    setTienda(data);
    console.log(data)
    
  };
  useEffect(() => {
    getTienda();
  }, []);

  return (
    <div className="App">
      <Context.Provider value={{tienda, setTienda}}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<InicioSecion />} />
          <Route path="/registro" element={<Registro />} />
          <Route path="/home" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/vestidos" element={<Vestidos />} />
          <Route path="/Enteritos" element={<Enteritos />} />
          <Route path="/Jardineras" element={<Jardineras />} />
          <Route path="/Pantalon" element={<Pantalon />} />
          <Route path="/miperfil" element={<MiPerfil />} />
          <Route path="/crearpub" element={<CrearPub />} />
          <Route path="/detalle/:id" element={<Detalle />} />
        </Routes>
        </BrowserRouter>
      </Context.Provider>
     
    </div>
  );
}

export default App;
