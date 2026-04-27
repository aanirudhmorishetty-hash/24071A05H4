import { Activity, Calendar, Clock, FileText, User } from 'lucide-react';
import './PatientDetails.css';

const PatientDetails = () => {
  // Mock data
  const patient = {
    name: "John Doe",
    age: 45,
    bloodGroup: "O+",
    id: "PT-2023-8910",
    phone: "+1 234 567 8900"
  };

  const appointments = [
    { id: 1, doctor: "Dr. Sarah Wilson", dept: "Cardiology", date: "2023-11-15", time: "10:00 AM", status: "Upcoming" },
    { id: 2, doctor: "Dr. James Chen", dept: "Neurology", date: "2023-10-02", time: "02:30 PM", status: "Completed" }
  ];

  return (
    <div className="container py-8">
      <h2 className="mb-6">Patient Portal</h2>
      
      <div className="dashboard-grid">
        {/* Profile Card */}
        <div className="card p-6 profile-card animate-fade-in">
          <div className="text-center mb-6">
            <div className="avatar-placeholder mx-auto mb-4">
              <User size={48} className="text-muted" />
            </div>
            <h3>{patient.name}</h3>
            <p className="text-muted">ID: {patient.id}</p>
          </div>
          
          <div className="info-list">
            <div className="info-item flex justify-between py-2 border-b">
              <span className="text-muted">Age</span>
              <span className="font-bold">{patient.age} Yrs</span>
            </div>
            <div className="info-item flex justify-between py-2 border-b">
              <span className="text-muted">Blood Group</span>
              <span className="font-bold text-danger">{patient.bloodGroup}</span>
            </div>
            <div className="info-item flex justify-between py-2">
              <span className="text-muted">Phone</span>
              <span className="font-bold">{patient.phone}</span>
            </div>
          </div>
        </div>

        {/* Appointments Section */}
        <div className="appointments-section flex flex-col gap-6">
          <div className="card p-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
            <h3 className="mb-4 flex items-center gap-2"><Calendar size={24} className="text-primary"/> My Appointments</h3>
            
            <div className="appointments-list flex flex-col gap-4">
              {appointments.map(apt => (
                <div key={apt.id} className="appointment-card p-4 border rounded-md flex justify-between items-center">
                  <div>
                    <h4 className="mb-1">{apt.doctor}</h4>
                    <p className="text-sm text-muted mb-2">{apt.dept}</p>
                    <div className="flex gap-4 text-sm font-medium">
                      <span className="flex items-center gap-1"><Calendar size={14}/> {apt.date}</span>
                      <span className="flex items-center gap-1"><Clock size={14}/> {apt.time}</span>
                    </div>
                  </div>
                  <div>
                    <span className={`badge ${apt.status === 'Upcoming' ? 'badge-primary' : 'badge-success'}`}>
                      {apt.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card p-6 animate-fade-in" style={{ animationDelay: '0.2s' }}>
             <h3 className="mb-4 flex items-center gap-2"><Activity size={24} className="text-danger"/> Medical History</h3>
             <div className="p-4 border rounded-md border-dashed text-center text-muted">
               <FileText size={32} className="mx-auto mb-2 opacity-50" />
               <p>No recent medical history records found.</p>
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDetails;
