import {useParams} from 'react-router-dom';
import Navbar from '../components/Navbar.jsx';
import {Link} from 'react-router-dom';
import marcas from '../data/marcas.js';
// import './css/styles.css';

const ProductoDetalle = ({celulares}) => {
    const { id } = useParams();
    const celular = celulares[id];

    if (!celular) { return <h2> Celular no encontrado</h2>;}

    const { nombre, descripcion, precio, marcaId, fotos } = celular;
   
    return(
    <>
    <Navbar /> 
    <Link to={`/Productos`}>
        <button>Volver</button>
      </Link>
      <h2>Detalle de celular</h2>
      <div className = "container-detalle">
        <h3>{nombre} </h3>
        <p>Descripción: {descripcion}</p>
        <p>Precio: ${precio}</p>
        <p>Marca: {marcas[marcaId]}</p>
        <img src={fotos} alt={`Foto de ${nombre}`} className="foto" />
    </div>
    </>
);
};

export default ProductoDetalle;