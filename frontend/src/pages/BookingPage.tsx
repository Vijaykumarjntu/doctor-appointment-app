import { useParams, useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally submit form data here
    navigate('/success');
  };

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      padding: '2rem'
    }}>
      <form 
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          maxWidth: '500px',
          background: '#fff',
          padding: '2rem',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0,0,0,0.1)'
        }}
      >
        <h2 style={{ textAlign: 'center', marginBottom: '1.5rem' }}>
          Book Appointment with Doctor {id}
        </h2>

        <div style={{ marginBottom: '1rem' }}>
          <label>Name:</label><br />
          <input
            type="text"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Email:</label><br />
          <input
            type="email"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Date:</label><br />
          <input
            type="date"
            required
            style={inputStyle}
          />
        </div>

        <div style={{ marginBottom: '1rem' }}>
          <label>Time:</label><br />
          <input
            type="time"
            required
            style={inputStyle}
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.75rem',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontWeight: 'bold',
            cursor: 'pointer'
          }}
        >
          Confirm Appointment
        </button>
      </form>
    </div>
  );
};

const inputStyle: React.CSSProperties = {
  width: '100%',
  padding: '0.5rem',
  border: '1px solid #ccc',
  borderRadius: '5px',
  marginTop: '0.25rem'
};

export default BookingPage;
