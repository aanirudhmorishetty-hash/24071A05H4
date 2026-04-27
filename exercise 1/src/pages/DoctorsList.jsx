import { Search, Star } from 'lucide-react';
import './DoctorsList.css';

// Need to fetch from backend later
const doctorsData = [];

const DoctorsList = () => {
  return (
    <div className="container py-8">
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <h2>Our Medical Specialists</h2>
        <div className="search-bar flex items-center">
          <Search size={20} className="text-muted ml-3 absolute" />
          <input type="text" className="form-control pl-10" placeholder="Search doctors or specialties..." />
        </div>
      </div>

      <div className="doctors-grid">
        {doctorsData.length === 0 ? (
          <p className="text-center text-muted" style={{ gridColumn: '1 / -1', padding: '2rem' }}>
            No doctors available at the moment. Please check back later.
          </p>
        ) : (
          doctorsData.map(doctor => (
            <div key={doctor.id} className="card doctor-card">
              <img src={doctor.image} alt={doctor.name} className="doctor-image" />
              <div className="p-4 text-center">
                <h3 className="mb-1">{doctor.name}</h3>
                <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                <div className="flex items-center justify-center gap-1 text-muted mb-4">
                  <Star size={16} className="text-warning fill-current" color="#ffc107" />
                  <span>{doctor.rating}</span>
                </div>
                <button className="btn btn-outline btn-block">Book Appointment</button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DoctorsList;
