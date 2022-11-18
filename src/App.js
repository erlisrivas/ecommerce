
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
    const [tienda, setTienda] = useState([]);
    const [usuario, setUsuario] = useState([]);
    const [agregarCar, setAgregarCar] = useState ([]);
    const [buscador, setBuscador] = useState("");
    const [auth,setAuth] = useState(false);

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
              incrementar, decrement, add
              }}>
        <BrowserRouter>
        <Routes>
        <Route index element={<InicioSecion/>} />
        <Route path="/iniciosesion" element={<InicioSecion/>} />
        <Route path="/registro" element={<Registro />} />
        <Route element={<PrivateRoute auth = {auth}/>}>
          <Route path="/home" element={<Home />} />
          <Route path="/carrito" element={<Carrito />} />
          <Route path="/vestidos" element={<Vestidos />}/>
          <Route path="/Enteritos" element={<Enteritos />} />
          <Route path="/Jardineras" element={<Jardineras />} />
          <Route path="/Pantalon" element={<Pantalon />} />
          <Route path="/miperfil" element={<MiPerfil />} />
          <Route path="/crearPub" element={<CrearPub />}/>
          <Route path="/detalle/:id" element={<Detalle />} />
        </Route>
        </Routes>
        </BrowserRouter>
        </Context.Provider>
      
     
    </div>
  );
}

export default App;
