
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, useEffect } from 'react';


import Registro from "./views/Registro";
import InicioSecion from './views/InicioSecion';
import Home from "./views/Home"
import MiPerfil from "./views/MiPerfil";
import Detalle from "./views/Detalle";
import Enteritos from "./views/Enteritos";
import Vestidos from "./views/Vestidos";
import Jardineras from "./views/Jardineras";
import Pantalon from "./views/Pantalon";
import Carrito from "./views/Carrito";
import CrearPub from "./views/CrearPub"

import {PrivateRoute} from "./componentes/PrivateRoute"




import Context from './Context';


function App() {
    const [tienda, setTienda] = useState([]); //para llamar datos de mi json tienda
    const [usuario, setUsuario] = useState([]); //para llamar datosde mi json usuarios
    const [agregarCar, setAgregarCar] = useState ([]); // para agregar a carrito de compra
    const [buscador, setBuscador] = useState(""); //para filtrar por nombredesde el buscador
    const [usu, setUsu] = useState (null);
    const [auth,setAuth] = useState(false);  // para autenticar usuario
    

const getTienda = async () => {
    const res = await fetch ('http://localhost:3000/tienda.json')
    const data = await res.json()
    setTienda(data);
    //console.log(data)
    
  };

  const getUsuarios = async () => {
    const res = await fetch ('http://localhost:3000/usuarios.json')
    const data = await res.json()
    setUsuario(data);
    //console.log(data);
    
  };
  useEffect(() => {
    getUsuarios();
    getTienda();
  }, []);

  const logout = () =>  setAuth (false) 

//funciones para el carrrito de compra

const add = ({id, price, name, img}) => {
  const productoEncontradoIndex = agregarCar.findIndex((p) => p.id === id);
  const producto = {id, price, name, img, count: 1};

  if (productoEncontradoIndex >= 0){
    agregarCar[productoEncontradoIndex].count++;
    setAgregarCar([...agregarCar]);
  } else{
    setAgregarCar ([...agregarCar, producto]);
  }
};

const incrementar = (i) => {
  agregarCar[i].count++;
  setAgregarCar([...agregarCar]);
};

const decrement = (i) => {
  const {count} = agregarCar[i];
  if (count === 1) {
    agregarCar.splice(i, 1);
  } else {
    agregarCar[i].count--;
  }
  setAgregarCar([...agregarCar]);
};





  return (
    <div className="App">
      <Context.Provider 
      value ={{tienda, setTienda, 
              usuario, setUsuario, 
              buscador, setBuscador, 
              auth, setAuth,
              agregarCar, setAgregarCar,
              incrementar, decrement, add,
              logout, setUsu, usu}}>
        <BrowserRouter>
        <Routes>
        <Route path="/" element={<InicioSecion/>} />
        <Route path="/iniciosesion" element={<InicioSecion/>} />
        <Route path="/registro" element={<Registro />} />
       
        <Route path="/home" element={
          <PrivateRoute auth = {auth}>
            <Home />
          </PrivateRoute>
        } />
        <Route path="/carrito" element={
           <PrivateRoute auth = {auth}>
            <Carrito />
          </PrivateRoute>
        } />
        <Route path="/vestidos" element={
          <PrivateRoute auth = {auth}>
            <Vestidos />
          </PrivateRoute>
        }/>
        <Route path="/Enteritos" element={
          <PrivateRoute auth = {auth}>
            <Enteritos />
          </PrivateRoute>
        } />
        <Route path="/Jardineras" element={
          <PrivateRoute auth = {auth}>
            <Jardineras />
          </PrivateRoute>
        } />
        <Route path="/Pantalon" element={
          <PrivateRoute auth = {auth}>
            <Pantalon />
          </PrivateRoute>
        } />
        <Route path="/miperfil" element={
          <PrivateRoute auth = {auth}>
            <MiPerfil />
          </PrivateRoute>
        } />
        <Route path="/crearPub" element={
          <PrivateRoute auth = {auth}>
            <CrearPub />
          </PrivateRoute>
        }/>
        <Route path="/detalle/:id" element={
          <PrivateRoute auth = {auth}>
            <Detalle />
          </PrivateRoute>
        } />
        </Routes>
        </BrowserRouter>
        </Context.Provider>
      
     
    </div>
  );
}

export default App;
