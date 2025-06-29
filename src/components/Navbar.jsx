import { Link } from 'react-router-dom';
import { useState } from 'react';
import '../css/styles.css';
import celulares from '../data/data.js';
import marcas from '../data/marcas.js';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const marcaIdsUnicas = [...new Set(celulares.map(cel => cel.marcaId))];

  return (
    <>
      <nav className="navbar">
      <div className="navbar-logo">
       <img src={logo} className="logo" alt="PearPhone" />
      </div>
        <ul className="menu">
          <li><Link to="/">Home</Link></li>
          <li className="dropdown">
            <button className="dropdown-button" onClick={() => setMostrarMenu(!mostrarMenu)}>
              Productos
            </button>

            {mostrarMenu && (
              <ul className="submenu">
                <li><Link to="/Productos" onClick={() => setMostrarMenu(false)}>Ver todos</Link></li>
                {marcaIdsUnicas.map((id) => (
                  <li key={id}>
                    <Link to={`/celular/marca/${id}`} onClick={() => setMostrarMenu(false)}>
                      {marcas[id]}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li><Link to="/QuienesSomos">Quiénes Somos</Link></li>
          <li><Link to="/Contacto">Contacto</Link></li>
          <li><Link to="/Consultas">Consultas</Link></li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;