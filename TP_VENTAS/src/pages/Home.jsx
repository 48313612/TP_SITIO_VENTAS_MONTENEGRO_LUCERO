import React from 'react';
import Navbar from './Navbar.jsx';
import Listado from './Listado.jsx';
import './css/styles.css';

function Home({ personas }) {
  return (
   <> 
   <Navbar />
   <h1> Home </h1>
   {/* <Listado personas={personas}/>  */}
   </>
  );
}

export default Home;