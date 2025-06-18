import {Link, Outlet} from 'react-router-dom';

const Navbar = () => {
return(
    <>
    <nav>
        <Link to= "/"> Home </Link>
        <Link to= "/QuienesSomos"> Quiénes Somos</Link>
        <Link to= "/Productos"> Productos</Link>
        <Link to= "/Contacto"> Contacto</Link>
    </nav>
    <Outlet />
    </>
);
};
export default Navbar;