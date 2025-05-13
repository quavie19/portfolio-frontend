import { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all fields.');
      return;
    }

    try {
      const res = await fetch('http://localhost:8000/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        alert('Message sent!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Something went wrong.');
      }
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  return (
    <div id='contact'>
      <form
        onSubmit={handleSubmit}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1.5rem',
          width: '100%',
        }}
      >
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <label htmlFor='name'>Name</label>
            <input
              name='name'
              id='name'
              value={formData.name}
              onChange={handleChange}
              type='text'
              required
              style={{ width: '100%', minHeight: '40px' }}
            />
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <label htmlFor='email'>Email</label>
            <input
              name='email'
              id='email'
              value={formData.email}
              onChange={handleChange}
              type='email'
              required
              style={{ width: '100%', minHeight: '40px' }}
            />
          </div>
        </div>

        <div>
          <label htmlFor='message'>Message</label>
          <textarea
            name='message'
            id='message'
            value={formData.message}
            onChange={handleChange}
            required
            style={{
              width: '100%',
              minHeight: '120px',
              padding: '10px',
              resize: 'vertical',
              fontSize: 'large',
            }}
          />
        </div>

        <button
          type='submit'
          //   style={{
          //     alignSelf: 'flex-start',
          //     backgroundColor: '#fff',
          //     color: '#000',
          //     border: '1px solid #000',
          //     padding: '10px 20px',
          //     borderRadius: '6px',
          //     cursor: 'pointer',
          //     transition: 'background-color 0.3s ease',
          //     width: '100%',
          //   }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
