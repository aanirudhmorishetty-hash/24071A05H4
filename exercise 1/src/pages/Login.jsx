import { Link } from 'react-router-dom';
import { Lock, Mail } from 'lucide-react';
import './Auth.css';

const Login = () => {
  return (
    <div className="auth-container">
      <div className="glass-panel auth-card animate-fade-in">
        <div className="text-center mb-6">
          <h2 className="mb-2">Welcome Back</h2>
          <p className="text-muted">Log in to your HospMan account</p>
        </div>

        <form className="auth-form">
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

          <div className="flex justify-between items-center mb-6">
            <label className="flex items-center gap-2 text-sm">
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" className="text-primary text-sm">Forgot Password?</a>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Log In
          </button>
        </form>

        <p className="text-center mt-6 text-muted">
          Don't have an account? <Link to="/register" className="text-primary font-bold">Sign up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
