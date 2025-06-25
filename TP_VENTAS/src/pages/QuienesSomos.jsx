import React from 'react';
import Navbar from '../components/Navbar.jsx';;
import Footer from '../components/Footer.jsx';
import '../css/styles.css';

function QuienesSomos() {
  return (
    <>
    <Navbar />
    <section className="quienes-container">
      <h1>Quiénes Somos</h1>
      <div className="quienes-contenido">
        <div className="quienes-texto">
          <p>En PearPhone somos apasionados por la tecnología y la innovación...</p>
          <p>Desde nuestros inicios, hemos trabajado para ser un puente confiable...</p>
          <p>En PearPhone creemos que un buen celular puede transformar tu día a día...</p>
          <p>Gracias por confiar en nosotros y ser parte de la comunidad PearPhone.</p>
        </div>
        <div className="quienes-imagen">
          <img src="https://coworkingfy.com/wp-content/uploads/2019/11/trabajo-en-equipo-grupo-figurativo-de-equipo-de-trabajo.jpg" alt="Equipo de trabajo" />
        </div>
      </div>
    </section>
    <Footer />
  </>
  
  );
}

export default QuienesSomos;