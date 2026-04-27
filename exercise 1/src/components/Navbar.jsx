import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="navbar glass-panel">
      <div className="container flex items-center justify-between">
        <Link to="/" className="navbar-brand flex items-center gap-2">
          <span className="font-bold">HospMan</span>
        </Link>
        
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <Link to="/" onClick={toggleMenu}>Home</Link>
          <Link to="/doctors" onClick={toggleMenu}>Doctors</Link>
          <Link to="/book-appointment" onClick={toggleMenu}>Appointments</Link>
          <Link to="/patients" onClick={toggleMenu}>Patients</Link>
          <Link to="/contact" onClick={toggleMenu}>Contact</Link>
        </div>

        <div className="nav-actions flex items-center gap-4">
          <Link to="/login" className="btn btn-outline">Login</Link>
          <Link to="/register" className="btn btn-primary">Register</Link>
        </div>

        <button className="mobile-toggle" onClick={toggleMenu}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
