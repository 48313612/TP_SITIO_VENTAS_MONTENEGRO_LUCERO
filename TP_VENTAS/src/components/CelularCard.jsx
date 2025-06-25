import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

function Card({ datos }) {
  const { id, nombre, fotos } = datos;

  return (
    <div className="producto-card">
      <img src={fotos} className="producto-img" alt={nombre} />
      <h3 className="producto-nombre">{nombre}</h3>
      <Link to={`/celular/${id}`} className="btn-vermas">
        Ver más
      </Link>
    </div>
  );
}

export default Card;
