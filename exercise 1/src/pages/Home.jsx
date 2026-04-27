import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title animate-fade-in">
              Modern Healthcare <br /> <span className="text-gradient">For Everyone</span>
            </h1>
            <p className="hero-subtitle text-muted mt-4 mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Experience the next generation of hospital management. Streamlined appointments, expert doctors, and comprehensive patient care.
            </p>
            <div className="hero-actions flex gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <Link to="/book-appointment" className="btn btn-primary flex items-center gap-2">
                Book Appointment <ArrowRight size={18} />
              </Link>
              <Link to="/doctors" className="btn btn-outline">
                Find a Doctor
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section bg-white py-12">
        <div className="container">
          <div className="text-center mb-12">
            <h2>Why Choose HospMan?</h2>
            <p className="text-muted">Providing world-class healthcare facilities</p>
          </div>
          
          <div className="features-grid">
            <div className="card feature-card p-6 text-center">
              <h3>Expert Doctors</h3>
              <p className="text-muted">Access to top medical professionals across various specialties.</p>
            </div>
            
            <div className="card feature-card p-6 text-center">
              <h3>Easy Scheduling</h3>
              <p className="text-muted">Book appointments online anytime, anywhere without hassle.</p>
            </div>
            
            <div className="card feature-card p-6 text-center">
              <h3>Emergency Care</h3>
              <p className="text-muted">24/7 emergency services and comprehensive patient support.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
