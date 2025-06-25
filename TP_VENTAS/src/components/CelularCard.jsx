import React from 'react';
import {Link} from 'react-router-dom'
import '../css/styles.css';

function Card({datos}) {
  const {id, nombre, fotos } = datos;

  return (
    <div className="producto-card">
      <p>Nombre: <span>{nombre}</span></p>
      <img src={fotos} className="foto" />
      <Link to={`/celular/${id}`}>
        <button>Ver más</button>
      </Link>

    </div>
  );
}

export default Card;