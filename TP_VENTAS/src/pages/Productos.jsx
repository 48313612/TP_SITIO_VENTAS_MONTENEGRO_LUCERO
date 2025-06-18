import React, { useState } from 'react';
import CelularCard from '../components/CelularCard';
import celulares from '../data/data.js';
import Navbar from '../components/Navbar.jsx';
import FilterButtons from '../components/FilterButtons.jsx';
import { useParams } from 'react-router-dom';

function Productos() {
  const { marcaId } = useParams();
  const [filtro, setFiltro] = useState('0');

  const cambiarFiltro = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  // 1. Filtrar por marcaId si viene desde la URL
  let celularesFiltrados = marcaId
    ? celulares.filter(cel => cel.marcaId.toString() === marcaId)
    : celulares;

  // 2. Filtrar por el filtro del botón si no es "0"
  if (filtro !== '0') {
    celularesFiltrados = celularesFiltrados.filter(cel => cel.marcaId.toString() === filtro);
  }

  return (
    <>
      <Navbar />
      <FilterButtons filtro={filtro} cambiarFiltro={cambiarFiltro} />
      <div className="container">
        {celularesFiltrados.length === 0 ? (
          <p>No hay celulares</p>
        ) : (
          celularesFiltrados.map((celular) => (
            <CelularCard key={celular.id} datos={celular} />
          ))
        )}
      </div>
    </>
  );
}

export default Productos;
