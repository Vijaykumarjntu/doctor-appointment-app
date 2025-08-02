import { Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import DoctorProfile from './pages/DoctorProfile';
import BookingPage from './pages/BookingPage';
import SuccessPage from './pages/SuccessPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/doctor/:id" element={<DoctorProfile />} />
      <Route path="/book/:id" element={<BookingPage />} />
      <Route path="/success" element={<SuccessPage />} />
    </Routes>
  );
}

export default App;
