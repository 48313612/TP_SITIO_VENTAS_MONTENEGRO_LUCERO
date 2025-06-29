import {useParams} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import {Link} from 'react-router-dom';
import marcas from '../data/marcas.js';
import Footer from '../components/Footer.jsx';
import '../css/styles.css';

const ProductoDetalle = ({celulares}) => {
    const { id } = useParams();
    const celular = celulares[id];
    if (!celular) { return <h2> Celular no encontrado</h2>;}
    const { nombre, descripcion, precio, marcaId, fotos } = celular;
    
    return(
      <>
      <section className="detalle-container">
        <div className="volver">
          <Link to="/Productos">
            <button className="btn-volver">Volver</button>
          </Link>
        </div>
    
        <h2>Detalle de celular</h2>
        <div className="container-detalle">
          <div className="detalle-texto">
            <h3>{nombre}</h3>
            <p><strong>Descripción:</strong> {descripcion}</p>
            <p><strong>Precio:</strong> ${precio}</p>
            <p><strong>Marca:</strong> {marcas[marcaId]}</p>
          </div>
          <div className="detalle-imagen">
            <img src={fotos} alt={`Foto de ${nombre}`} />
          </div>
        </div>
      </section>
    </>
    
);
};

export default ProductoDetalle;