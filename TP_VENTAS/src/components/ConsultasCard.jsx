import React from 'react';
import '../css/styles.css';

function Card({datos}) {
  const {nombre, apellido, email, consulta } = datos;

  return (
    <div className="consulta">
      <p>Nombre: <span>{nombre}</span></p>
      <p>Apellido: <span>{apellido}</span></p>
      <p>Email: <span>{email}</span></p>
      <p>Consulta: <span>{consulta}</span></p>
    </div>
  );
}

export default Card;