import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route, Link} from 'react-router-dom'
import QuienesSomos from './pages/QuienesSomos.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Productos from './pages/Productos.jsx'
import Contacto from './pages/Contacto.jsx'
import Home from './pages/Home.jsx'

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
      {/* <Route path="/" element={<Home personas={personas} setPersonas={setPersonas}/>}></Route> */}
          <Route path="/" element={<Home />}></Route>
          <Route path="/persona/:id" element={<DetallePersona personas={personas} />} />
          <Route path="/Contacto" element={<Contacto enviarDatos={(nuevaConsulta) => setConsulta([...consultas, nuevaConsulta])}/>}></Route>
          <Route path="/QuienesSomos" element={<QuienesSomos />}></Route>
          <Route className= 'pag404' path="*" element={<h1>404</h1>}></Route>
     </Routes>
     </BrowserRouter>
    </>
);
};
export default Layout;