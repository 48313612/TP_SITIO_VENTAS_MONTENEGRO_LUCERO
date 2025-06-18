import React, { useState } from 'react';
import CelularCard from '../components/CelularCard';
import celulares from '../data/data.js';
import Navbar from '../components/Navbar.jsx';
import { useParams } from 'react-router-dom';

function Productos() {
  const { marcaId } = useParams();

  let celularesFiltrados = marcaId
    ? celulares.filter(cel => cel.marcaId.toString() === marcaId)
    : celulares;


  return (
    <>
      <Navbar />
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
