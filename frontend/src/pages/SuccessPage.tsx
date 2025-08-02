import { Link } from 'react-router-dom';

const SuccessPage = () => {
  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e6f7ff',
        padding: '2rem',
      }}
    >
      <div
        style={{
          background: '#fff',
          padding: '3rem',
          borderRadius: '12px',
          boxShadow: '0 0 15px rgba(0,0,0,0.1)',
          textAlign: 'center',
          maxWidth: '400px',
          width: '100%',
        }}
      >
        <h2 style={{ fontSize: '1.5rem', color: '#28a745', marginBottom: '1rem' }}>
          🎉 Appointment Booked Successfully!
        </h2>
        <p style={{ marginBottom: '1.5rem', fontSize: '1rem' }}>
          You will receive a confirmation email shortly.
        </p>
        <Link
          to="/"
          style={{
            padding: '0.75rem 1.5rem',
            backgroundColor: '#007bff',
            color: '#fff',
            textDecoration: 'none',
            borderRadius: '6px',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default SuccessPage;
