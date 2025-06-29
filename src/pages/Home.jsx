import React from "react";
import { Link } from "react-router-dom";
import "../css/styles.css";
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';

export default function Home() {
  const productosPopulares = [
    { nombre: "iPhone 14 Pro", precio: "$999", img: "https://shop.litecorp.com.ar/wp-content/uploads/2023/06/image-removebg-preview-2023-06-21T011220.945.png" },
    { nombre: "Samsung Galaxy S23", precio: "$899", img: "https://clevercel.mx/cdn/shop/files/Portadas_SamsungS23Ultra.webp?v=1749242647" },
    { nombre: "Xiaomi 13 Pro", precio: "$599", img: "https://playroomonline.com.ar/wp-content/uploads/2024/03/note13-pro.png" },
  ];

  return (
    <div className="home-container">
      <Navbar />

      <div className="hero">
        <div className="hero-text">
          <h1>Bienvenido a PearPhone</h1>
          <p>Descubrí los últimos modelos al mejor precio y con garantía oficial.</p>
        </div>
      </div>

      <div className="beneficios">
        <div className="beneficio">
          <i className="fas fa-truck"></i>
          <p>Envío gratis</p>
        </div>
        <div className="beneficio">
          <i className="fas fa-lock"></i>
          <p>Pago seguro</p>
        </div>
        <div className="beneficio">
          <i className="fas fa-mobile-alt"></i>
          <p>Modelos originales</p>
        </div>
        <div className="beneficio">
          <i className="fas fa-headset"></i>
          <p>Soporte personalizado</p>
        </div>
      </div>

      <h2 className="titulo-seccion">Más vendidos</h2>
      <div className="productos-populares">
        {productosPopulares.map((prod, i) => (
          <div key={i} className="producto-card">
            <img src={prod.img} alt={prod.nombre} />
            <h3>{prod.nombre}</h3>
            <p>{prod.precio}</p>
            <Link to="/Productos" className="btn-comprar">Comprar</Link>
          </div>
        ))}
      </div>

      <div className="confianza">
        <h2>Compra con confianza</h2>
        <div className="logos-confianza">
          <img src="https://www.afip.gob.ar/comoPagarImpuestos/como-pagar-impuestos/img/visa.png" alt="Visa" />
          <img src="https://logos-marcas.com/wp-content/uploads/2020/09/Mastercard-Simbolo.png" alt="MasterCard" />
          <img src="https://calim.com.ar/wp-content/uploads/2020/01/mercado-libre-mercado-pago-percepciones.png" alt="MercadoPago" />
          <img src="https://upload.wikimedia.org/wikipedia/commons/6/65/Correo-argentino-estado.jpg" alt="Correo Argentino" />
        </div>
      </div>

      <Footer />
    </div>
  );
}
