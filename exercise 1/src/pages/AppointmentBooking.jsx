import { Calendar, Clock, User, FileText } from 'lucide-react';
import './AppointmentBooking.css';

const AppointmentBooking = () => {
  return (
    <div className="container py-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="mb-6 text-center">Book an Appointment</h2>
        
        <div className="card glass-panel p-8 animate-fade-in">
          <form className="booking-form">
            <div className="form-grid">
              <div className="form-group">
                <label className="form-label">Select Department</label>
                <select className="form-control">
                  <option>Cardiology</option>
                  <option>Neurology</option>
                  <option>Orthopedics</option>
                  <option>Pediatrics</option>
                  <option>General Medicine</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Select Doctor</label>
                <select className="form-control">
                  <option>Dr. Sarah Wilson (Cardiology)</option>
                  <option>Dr. James Chen (Neurology)</option>
                  <option>Any Available Doctor</option>
                </select>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Date</label>
                <div className="input-with-icon">
                  <Calendar size={18} className="input-icon" />
                  <input type="date" className="form-control pl-10" />
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Preferred Time</label>
                <div className="input-with-icon">
                  <Clock size={18} className="input-icon" />
                  <input type="time" className="form-control pl-10" />
                </div>
              </div>
            </div>

            <h3 className="mt-6 mb-4">Patient Information</h3>
            
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-with-icon">
                <User size={18} className="input-icon" />
                <input type="text" className="form-control pl-10" placeholder="John Doe" />
              </div>
            </div>

            <div className="form-group">
              <label className="form-label">Reason for Visit</label>
              <div className="input-with-icon" style={{ alignItems: 'flex-start', paddingTop: '0.75rem' }}>
                <FileText size={18} className="input-icon" />
                <textarea className="form-control pl-10" rows="4" placeholder="Briefly describe your symptoms or reason for visit..."></textarea>
              </div>
            </div>

            <button type="submit" className="btn btn-primary btn-block mt-6">
              Confirm Appointment
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AppointmentBooking;
