import { BrowserRouter, Routes, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDetails from './pages/PatientDetails';
import DoctorsList from './pages/DoctorsList';
import AppointmentBooking from './pages/AppointmentBooking';
import Contact from './pages/Contact';

// styles
import './styles/App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Navbar />
        
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/patients" element={<PatientDetails />} />
            <Route path="/doctors" element={<DoctorsList />} />
            <Route path="/book-appointment" element={<AppointmentBooking />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
