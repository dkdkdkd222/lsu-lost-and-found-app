import { Link, Outlet } from "react-router-dom";
import '../styles/layout.css';
import Header from './Header';
import Footer from './Footer';


const Layout = () => {
  return (
    <div className="layoutWrapper">
      <Header />

      <main className="contentArea">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default Layout;