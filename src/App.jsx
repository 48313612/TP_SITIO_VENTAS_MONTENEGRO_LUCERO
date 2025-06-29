import './App.css'
import MainLayout from './layouts/MainLayout.jsx'
import { useState, useEffect } from 'react'
import { HashRouter, Routes, Route} from 'react-router-dom'
import QuienesSomos from './pages/QuienesSomos.jsx'
import ProductoDetalle from './pages/ProductoDetalle.jsx'
import Productos from './pages/Productos.jsx'
import Contacto from './pages/Contacto.jsx'
import Home from './pages/Home.jsx'
import Consultas from './pages/Consultas.jsx'
import celulares from './data/data.js';

function App() {
    const [consultas, setConsultas] = useState(() => {
              const consultasGuardadas = localStorage.getItem('consultas');
              return consultasGuardadas ? JSON.parse(consultasGuardadas) : [];
            });

    useEffect(() => {
        localStorage.setItem('consultas', JSON.stringify(consultas));
      }, [consultas]);
  return (
      <HashRouter>  
      <Routes> 
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />}></Route>
            <Route path="/Productos" element={<Productos />} />
            <Route path="/celular/:id" element={<ProductoDetalle celulares={celulares} />} />
            <Route path="/celular/marca/:marcaId" element={<Productos celulares={celulares} />} />
            <Route path="/Contacto" element={<Contacto enviarDatos={(nuevaConsulta) => setConsultas([...consultas, nuevaConsulta])}/>}></Route>
            <Route path="/QuienesSomos" element={<QuienesSomos />}></Route>
            <Route path="/Consultas" element={<Consultas consultas={consultas} setConsultas={setConsultas}/>}></Route>
            <Route className= 'pag404' path="*" element={<h1>404</h1>}></Route>
          </Route>
     </Routes>
     </HashRouter>
  )
}

export default App
