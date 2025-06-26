import React from 'react';
import CelularCard from '../components/CelularCard';
import celulares from '../data/data.js';
import marcas from '../data/marcas.js'; 
import Navbar from '../components/Navbar.jsx';
import { useParams } from 'react-router-dom';
import Footer from '../components/Footer.jsx';
import "../css/styles.css";

function Productos() {
  const { marcaId } = useParams();

  let celularesFiltrados = marcaId
    ? celulares.filter(cel => cel.marcaId.toString() === marcaId)
    : celulares;

  const nombreMarca = marcaId ? marcas[marcaId] : null;

  return (
    <>
      <Navbar />
      <div className="container">
        <h1> Productos </h1>
        {nombreMarca && <h2>{nombreMarca}</h2>} 
        {celularesFiltrados.length === 0 ? (
          <p>No hay celulares</p>
        ) : (
          <div className="celulares-grid">{
          celularesFiltrados.map((celular) => (
            <CelularCard key={celular.id} datos={celular} />
          ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

export default Productos;