import React, { useState } from 'react';
import Navbar from './components/Navbar.jsx';
import './css/styles.css';

function Contacto({ enviarDatos }) {
  const [consulta, setConsulta] = useState({
    nombre: '',
    apellido: '',
    email: '',
    consulta: '',
  });

  const [errores, setErrores] = useState({
    nombre: false,
    apellido: false,
    email: false,
    consulta: false,
  });

  const detectoCambios = (e) => {
    const { name, value } = e.target;
    setConsulta((consulta) => ({ ...consulta, [name]: value }));
  };

  const tomarDatos = (e) => {
    e.preventDefault();

    const validoNombre = validarTexto(consulta.nombre);
    const validoApellido = validarTexto(consulta.apellido);
    const validoEmail = /^[a-z0-9]+@(gmail|hotmail|outlook)\.com$/.test(consulta.email);
    const validoConsulta = validarTexto(consulta.consulta);

    setErrores({
      nombre: !validoNombre,
      apellido: !validoApellido,
      email: !validoEmail,
      consulta: !validoConsulta,
    });

    if (validoNombre && validoApellido && validoEmail && validoConsulta) {
      enviarDatos(consulta);

      setConsulta({
        nombre: '',
        apellido: '',
        email: '',
        consulta: '',
      });

      mostrarMensaje();
      setTimeout(ocultarMensaje, 5000);
    }
  };

  const validarTexto = (text) => {
    let valido = true;
    const regexTexto = /^[A-Za-zÀ-ÿ\s]+$/;
    if (text.trim().length === 0 || !regexTexto.test(text)) {
      valido = false;
    }
    return valido;
  };


  const mostrarMensaje = () => {
    document.getElementById("mensajeConfirmacion").style.display = "block";
  }
  
  const ocultarMensaje = () => {
    document.getElementById("mensajeConfirmacion").style.display = "none";
  }

  // FORMULARIO
  return (
    <>   
    <Navbar />
    <h1> Contacto </h1>
    <div className = "align-center"> 
    <form onSubmit={tomarDatos}>
      <label>Nombre</label>
      <input type="text" name="nombre" value={consulta.nombre} className="u-full-width" placeholder="Ingrese su nombre" onChange={detectoCambios} required/>
      {errores.nombre && <p style={{ color: 'red' }}>ERROR. Ingrese un nombre válido</p>}

      <label>Apellido</label>
      <input type="text" name="apellido" value={consulta.apellido} className="u-full-width" placeholder="Ingrese su apellido" onChange={detectoCambios} required/>
      {errores.apellido && <p style={{ color: 'red' }}>ERROR. Ingrese un apellido válido</p>}

      <label>Email</label>
      <input type="text" name="email" value={consulta.email} className="u-full-width" placeholder="Ingrese su email" onChange={detectoCambios} required/>
      {errores.email && <p style={{ color: 'red' }}>ERROR. Ingrese un email válido</p>}

      <label>Edad</label>
      <input type="number" name="edad" value={consulta.consulta} className="u-full-width" placeholder="Ingrese su edad" min="0" onChange={detectoCambios} required/>
      {errores.consulta && <p style={{ color: 'red' }}>ERROR. Ingrese una consulta válida</p>}

      <button type="submit" className="u-full-width button-primary"> Enviar</button>
    </form>
    </div>
    <div id="mensajeConfirmacion" style={{ color: 'green', display: 'none' }}>
        <p>Formulario enviado correctamente</p>
    </div>
    </>
     
  );
}

export default Contacto;