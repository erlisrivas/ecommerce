
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {useState, useEffect } from 'react';
import Context from './Context';

import Home from "./views/Home"
import Detalle from "./views/Detalle";
import Carrito from "./views/Carrito";
import NavBar from './componentes/NavBar';

function App() {

    const [product, setProduct] = useState([]); //para llamar datos de mi json Products
    const [local, setLocal] = useState([]); //para llamar datos de mi json Locals
    const [addToCar, setAddToCar] = useState ([]); // para agregar a carrito de compra
    const [search, setSearch] = useState(""); //para obtener el id del local y mostrar stock en vista detalle
    const [searchProduct, setSearchProduct] = useState(""); //para filtrar productos por nombre
    const [getStock, setGetStock] = useState (0); //para mostrar stock obtenido

    const getProduct = async () => {
      const res = await fetch ('./Products.json');
      const data = await res.json();
      setProduct(data);
     
      //console.log(data);
    };

    const getLocal = async () => {
      const res = await fetch ('./Locals.json')
      const data = await res.json()
      setLocal(data);
    //console.log(data);
    };

    useEffect(() => {
      getLocal();
      getProduct();
    }, []);

//funciones para el carrrito de compra

const add = ({id, sku, price, name, image}) => {
  const productoEncontradoIndex = addToCar.findIndex((p) => p.id === id);
  const producto = {id, sku, price, name, image, count: 1};
  

  if (productoEncontradoIndex >= 0){
    addToCar[productoEncontradoIndex].count++;
    setAddToCar([...addToCar]);
  } else{
    setAddToCar ([...addToCar, producto]);
    }
  };

  const increase = (i) => {
    addToCar[i].count++;
  setAddToCar([...addToCar]);
  };

  const decrease = (i) => {
    const {count} = addToCar[i];
    if (count === 1) {
    addToCar.splice(i, 1);
    } else {
    addToCar[i].count--;
    }
  setAddToCar([...addToCar]);
  };

  //contador para carrito de compra
  const total = addToCar.reduce((count, product) => count + product.count, 0);


  return (
    <div className="App">
      <Context.Provider 
      value ={{product, setProduct, 
              local, setLocal, 
              search, setSearch, 
              addToCar, setAddToCar,
              increase, decrease, add,
              total, searchProduct,
              setSearchProduct,  getStock, setGetStock,
             
             }}>
      
        <BrowserRouter>
        <NavBar/>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/carrito" element={<Carrito />} />
        <Route path="/detalle/:id" element={<Detalle />} />
        </Routes>
        </BrowserRouter>
        </Context.Provider>
      
     
    </div>
  );
}

export default App;
