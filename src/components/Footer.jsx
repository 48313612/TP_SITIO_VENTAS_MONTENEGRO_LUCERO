import React from 'react';
import { Link } from 'react-router-dom';
import '../css/styles.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-contenedor">
        <div className="footer-col">
          <h4>PearPhone</h4>
          <p>Innovación, diseño y tecnología al alcance de tu mano.</p>
        </div>

        <div className="footer-col">
          <h4>Secciones</h4>
          <ul>
            <li><Link to="/">Inicio</Link></li>
            <li><Link to="/Productos">Productos</Link></li>
            <li><Link to="/QuienesSomos">Quiénes Somos</Link></li>
            <li><Link to="/Contacto">Contacto</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Contacto</h4>
          <ul>
            <li>Email: contacto@pearphone.com</li>
            <li>Tel: +54 9 11 2345 6789</li>
            <li>Buenos Aires, Argentina</li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Seguinos</h4>
          <div className="redes-sociales">
            <a href="#"><i className="fab fa-facebook-f" /></a>
            <a href="#"><i className="fab fa-instagram" /></a>
            <a href="#"><i className="fab fa-twitter" /></a>
          </div>
        </div>
      </div>

      <div className="footer-copy">
        © 2025 PearPhone Inc. Todos los derechos reservados.
      </div>
    </footer>
  );
}

export default Footer;
