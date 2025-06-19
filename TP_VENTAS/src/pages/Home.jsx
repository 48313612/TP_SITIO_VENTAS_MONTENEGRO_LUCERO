import React from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
// import Listado from './Listado.jsx';
// import './css/styles.css';

function Home({ personas }) {
  return (
   <> 
   <Navbar />
   <h1> Home </h1>
   {/* <Listado personas={personas}/>  */}
   <Footer />
   </>
  );
}

export default Home;