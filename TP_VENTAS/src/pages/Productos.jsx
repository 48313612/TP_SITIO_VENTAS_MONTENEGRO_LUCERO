import React, { useEffect } from 'react';
import CelularCard from './components/CelularCard';
import celulares from './data/data.js';
import './css/styles.css';

function Listado() {
  return (
    <div className= "container">
      {personas.length === 0 ? (
        <p>No hay personas</p>
      ) : (
        personas.map((persona, index) => (
          <PersonaCard key={index} index={index} datos={persona}/>
        ))
      )}
    </div>
  );
}

export default Listado;