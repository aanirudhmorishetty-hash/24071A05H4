import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer bg-white">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col">
            <Link to="/" className="footer-brand flex items-center gap-2 mb-4">
              <span className="font-bold">HospMan</span>
            </Link>
            <p className="text-muted">
              Providing premium healthcare services with modern technology. Your health is our priority.
            </p>
          </div>
          
          <div className="footer-col">
            <h4 className="mb-4">Quick Links</h4>
            <ul className="footer-links">
              <li><Link to="/doctors">Find a Doctor</Link></li>
              <li><Link to="/book-appointment">Book Appointment</Link></li>
              <li><Link to="/patients">Patient Portal</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="footer-col">
            <h4 className="mb-4">Contact Info</h4>
            <ul className="contact-info gap-4 flex flex-col">
              <li className="flex items-center gap-2">
                <MapPin size={18} className="text-primary" />
                <span className="text-muted">123 Health Ave, Medical City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={18} className="text-primary" />
                <span className="text-muted">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={18} className="text-primary" />
                <span className="text-muted">contact@hospman.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom text-center text-muted mt-6">
          <p>&copy; {new Date().getFullYear()} 24071a05h4</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
