import { Mail, MapPin, Phone, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="container py-8">
      <div className="text-center mb-12">
        <h2>Get In Touch</h2>
        <p className="text-muted">We are here to help and answer any question you might have</p>
      </div>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info-panel flex flex-col gap-6">
          <div className="card p-6 flex items-start gap-4 animate-fade-in">
            <div className="icon-wrapper bg-blue-100 text-primary shrink-0">
              <MapPin size={24} />
            </div>
            <div>
              <h3 className="mb-2">Our Location</h3>
              <p className="text-muted">123 Health Ave, Medical City<br/>State, ZIP 12345</p>
            </div>
          </div>

          <div className="card p-6 flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <div className="icon-wrapper bg-green-100 text-success shrink-0">
              <Phone size={24} />
            </div>
            <div>
              <h3 className="mb-2">Phone Number</h3>
              <p className="text-muted">Emergency: 911<br/>Reception: +1 (555) 123-4567</p>
            </div>
          </div>

          <div className="card p-6 flex items-start gap-4 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            <div className="icon-wrapper bg-red-100 text-danger shrink-0">
              <Mail size={24} />
            </div>
            <div>
              <h3 className="mb-2">Email Address</h3>
              <p className="text-muted">contact@hospman.com<br/>support@hospman.com</p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="card p-8 glass-panel animate-fade-in" style={{ animationDelay: '0.3s' }}>
          <h3 className="mb-6">Send us a Message</h3>
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label">Your Name</label>
              <input type="text" className="form-control" placeholder="John Doe" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Your Email</label>
              <input type="email" className="form-control" placeholder="john@example.com" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Subject</label>
              <input type="text" className="form-control" placeholder="How can we help?" required />
            </div>
            
            <div className="form-group">
              <label className="form-label">Message</label>
              <textarea className="form-control" rows="5" placeholder="Your message here..." required></textarea>
            </div>
            
            <button type="submit" className="btn btn-primary flex items-center justify-center gap-2 w-full">
              Send Message <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
