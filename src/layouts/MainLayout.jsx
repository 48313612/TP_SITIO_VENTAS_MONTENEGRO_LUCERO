import { Outlet} from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

const Layout = () => {
return(
   <>
    <header> 
      <Navbar />
    </header>
    <main>
      <Outlet />
    </main>
    <footer>
      <Footer />
    </footer>
    
   </>
);
};
export default Layout;