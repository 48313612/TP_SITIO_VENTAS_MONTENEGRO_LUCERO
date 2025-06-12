import {useParams} from 'react-router-dom';
import Navbar from './Navbar.jsx';
import './css/styles.css';

const DetallePersona = ({personas}) => {
    const { id } = useParams();
    const persona = personas[id];

    if (!persona) { return <h2> Persona no encontrada</h2>;}

    const { nombre, apellido, edad, email } = persona;
   
    const mensajeEdad = () => {
        let mensaje = "Menor de edad";
        if(edad >= 18)
        {
            mensaje = "Mayor de edad"
        }
        return mensaje;
    };

    return(
    <>
    <Navbar /> 
      <h2>Detalle de Persona</h2>
      <div className = "container-detalle">
        <p>Nombre completo: {nombre} {apellido}</p>
        <p>Edad: {edad}</p>
        <p>Email: {email}</p>
        <p>{mensajeEdad()}</p>
    </div>
    </>
);
};

export default DetallePersona;