import React from 'react';
import '../css/styles.css';

function Card({ datos }) {
  const { nombre, apellido, email, consulta } = datos;

  return (
    <div className="card-consulta">
      <h3 className="card-titulo">{nombre} {apellido}</h3>
      <p><strong>Email:</strong> <span>{email}</span></p>
      <p><strong>Consulta:</strong></p>
      <p className="card-consulta-texto">{consulta}</p>
    </div>
  );
}

export default Card;
