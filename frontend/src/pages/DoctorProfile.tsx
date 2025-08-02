import { useParams, useNavigate } from 'react-router-dom';
import { doctors } from '../data/doctor'; // adjust path if needed

const DoctorProfile = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((doc) => doc.id === Number(id));

  if (!doctor) {
    return <div style={{ padding: '2rem' }}>Doctor not found.</div>;
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <img
        src={doctor.profilePic}
        alt={doctor.name}
        style={{ width: '100%', height: '300px', objectFit: 'cover', borderRadius: '8px' }}
      />
      <h2 style={{ fontSize: '2rem', marginTop: '1rem' }}>{doctor.name}</h2>
      <p style={{ fontSize: '1.2rem', color: '#666' }}>{doctor.specialization}</p>
      <p>Experience: {doctor.experience} years</p>
      <p>Location: {doctor.location}</p>
      {/* <p style={{ marginTop: '1rem', color: '#444' }}>{doctor.description}</p> */}

      <button
        onClick={() => navigate(`/book/${doctor.id}`)}
        style={{
          marginTop: '1.5rem',
          padding: '0.75rem 1.5rem',
          backgroundColor: '#2563eb',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
        }}
      >
        Book Appointment
      </button>
    </div>
  );
};

export default DoctorProfile;
