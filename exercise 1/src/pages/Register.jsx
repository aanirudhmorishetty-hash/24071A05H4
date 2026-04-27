import { Link } from 'react-router-dom';
import { User, Lock, Mail } from 'lucide-react';
import './Auth.css';

const Register = () => {
  return (
    <div className="auth-container">
      <div className="glass-panel auth-card animate-fade-in">
        <div className="text-center mb-6">
          <h2 className="mb-2">Create Account</h2>
          <p className="text-muted">Join HospMan to manage your healthcare</p>
        </div>

        <form className="auth-form">
          <div className="form-group">
            <label className="form-label">Full Name</label>
            <div className="input-with-icon">
              <User size={20} className="input-icon" />
              <input type="text" className="form-control" placeholder="John Doe" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Email Address</label>
            <div className="input-with-icon">
              <Mail size={20} className="input-icon" />
              <input type="email" className="form-control" placeholder="john@example.com" required />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label">Password</label>
            <div className="input-with-icon">
              <Lock size={20} className="input-icon" />
              <input type="password" className="form-control" placeholder="••••••••" required />
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block mt-4">
            Sign Up
          </button>
        </form>

        <p className="text-center mt-6 text-muted">
          Already have an account? <Link to="/login" className="text-primary font-bold">Log in</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
