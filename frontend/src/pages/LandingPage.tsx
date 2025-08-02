import React from 'react';
import { useNavigate } from 'react-router-dom';
import { doctors } from '../data/doctor'; // adjust path if needed

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '2rem' }}>availableToday Doctors</h1>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '2rem',
        }}
      >
        {doctors.map((doc) => (
          <div
            key={doc.id}
            onClick={() => navigate(`/doctor/${doc.id}`)}
            style={{
              cursor: 'pointer',
              border: '1px solid #ddd',
              borderRadius: '8px',
              padding: '1rem',
              textAlign: 'center',
              boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
              transition: 'transform 0.2s',
            }}
          >
            <img
              src={doc.profilePic}
              alt={doc.name}
              style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px' }}
            />
            <h3 style={{ marginTop: '1rem' }}>{doc.name}</h3>
            <p style={{ margin: '0.25rem 0', color: '#555' }}>{doc.specialization}</p>
            <p style={{ color: doc.availableToday ? 'green' : 'red' }}>
              {doc.availableToday ? 'availableToday' : 'UnavailableToday'}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LandingPage;
