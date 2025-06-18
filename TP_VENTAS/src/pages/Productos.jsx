import React, { useState } from 'react';
import CelularCard from '../components/CelularCard';
import celulares from '../data/data.js';
import Navbar from '../components/Navbar.jsx';
import FilterButtons from '../components/FilterButtons.jsx';

function Productos() {
  const [filtro, setFiltro] = useState('0');

  const cambiarFiltro = (nuevoFiltro) => {
    setFiltro(nuevoFiltro);
  };

  const celularesFiltrados = filtro === '0'
    ? celulares
    : celulares.filter(celular => celular.marcaId === Number(filtro));

  return (
    <>
      <Navbar />
      <FilterButtons filtro={filtro} cambiarFiltro={cambiarFiltro} />
      <div className="container">
        {celularesFiltrados.length === 0 ? (
          <p>No hay celulares</p>
        ) : (
          celularesFiltrados.map((celular, id) => (
            <CelularCard key={id} datos={celular} />
          ))
        )}
      </div>
    </>
  );
}

export default Productos;
