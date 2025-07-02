import React from 'react';
import ConsultasCard from '../components/ConsultasCard';
import '../css/styles.css';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

function Consultas({ consultas }) {
  return (
    <div className="page-layout">
      <div className="main-content container">
        <h1>Consultas</h1>
        {consultas.length === 0 ? (
          <p className='consultas-p'>No hay consultas aún.</p>
        ) : (
          consultas.map((consultas, index) => (
            <ConsultasCard key={index} index={index} datos={consultas} />
          ))
        )}
      </div>
    </div>
  );
}


export default Consultas;