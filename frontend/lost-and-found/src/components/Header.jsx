import { Link, Outlet } from "react-router-dom";
import lsuLogo from '../images/lsulogo.png';
import '../styles/header.css';

const Header = () => {
  return (
    <header className="headerContainer">
        <div className="headerLeft">
            <img src={lsuLogo} className="lsuLogoImg" alt="LSU Logo" />
        </div>
        
      <nav className="navLinks">
        <Link to="/">Home</Link>
        <Link to="/browse">Browse Items</Link>
        <Link to="/report">Report Item</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/login">Log In</Link>
      </nav>
    </header>
  );
};

export default Header;