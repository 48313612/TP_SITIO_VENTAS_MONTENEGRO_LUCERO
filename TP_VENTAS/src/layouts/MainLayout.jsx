import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import QuienesSomos from '../pages/QuienesSomos.jsx'
import ProductoDetalle from '../pages/ProductoDetalle.jsx'
import Productos from '../pages/Productos.jsx'
import Contacto from '../pages/Contacto.jsx'
import Home from '../pages/Home.jsx'
import celulares from '../data/data.js';

const Layout = () => {
    const [consultas, setConsultas] = useState(() => {
        const consultasGuardadas = localStorage.getItem('consultas');
        return consultasGuardadas ? JSON.parse(consultasGuardadas) : [];
      });

      useEffect(() => {
        localStorage.setItem('consultas', JSON.stringify(consultas));
      }, [consultas]);
return(
    <> 
    <BrowserRouter>  
      <Routes> 
          <Route path="/" element={<Home />}></Route>
          <Route path="/Productos" element={<Productos />} />
          <Route path="/celular/:id" element={<ProductoDetalle celulares={celulares} />} />
          <Route path="/Contacto" element={<Contacto enviarDatos={(nuevaConsulta) => setConsultas([...consultas, nuevaConsulta])}/>}></Route>
          <Route path="/QuienesSomos" element={<QuienesSomos />}></Route>
          <Route className= 'pag404' path="*" element={<h1>404</h1>}></Route>
     </Routes>
     </BrowserRouter>
    </>
);
};
export default Layout;